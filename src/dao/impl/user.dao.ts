import UserModel from "../../model/user.model";
import prisma from "../../../prisma/client";

class UserDao{
    async create(user:UserModel){
        try {
            return await prisma.user.create({
                data: {
                    user_id: user.user_id,
                    full_name: user.full_name,
                    email: user.email,
                    password: user.password
                }
            });
        }catch (err){
            throw err;
        }
    }
    async update(user:UserModel){
        try {
            return await prisma.user.update({
                where : {
                    user_id : user.user_id
                },
                data: {
                    full_name: user.full_name,
                    email: user.email,
                    password: user.password
                }
            });
        }catch (err){
            throw err;
        }
    }
    async getUserByEmail(email:string){
        try {
            return await prisma.user.findUnique({
                where : {
                    email : email
                }
            })
        }catch (err){
            throw err;
        }
    }
}

const User_dao = new UserDao();
export default User_dao;