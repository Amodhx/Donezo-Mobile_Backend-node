import UserModel from "../model/user.model";
import prisma from "../../prisma/client";
import User_dao from "../dao/impl/user.dao";
import jwt from "jsonwebtoken";

class JwtService{
    async signIn(user:UserModel){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const userMail = user.email;
        const userData:any = await User_dao.getUserByEmail(userMail);
        if (!userData){
            throw new Error("INVALID USER")
        }
        if (user.password != userData.password){
            throw new Error("INVALID PASSWORD")
        }
        if (!jwtSecretKey){
            throw new Error("CANT FIND JWT SECRET")
        }
        return jwt.sign({userId:user.email},jwtSecretKey,{
            expiresIn : '5h'
        })
    }
    async signUp(user:UserModel){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const userMail = user.email;
        const isUserNameValid = await prisma.user.findUnique({
            where : {
                email : userMail
            }
        })
        if (!jwtSecretKey){
            throw new Error("CANT FIND JWT SECRET")
        }
        if (!isUserNameValid){
            user.user_id = await User_dao.generateUserId();
            const savedUser = await User_dao.create(user);
            if (savedUser){
                return jwt.sign({userId:userMail},jwtSecretKey,{
                    expiresIn : '5h'
                })
            }
        }
        throw new Error("CANT SAVE USER");
    }
}

const JWT_service = new JwtService();
export default JWT_service;