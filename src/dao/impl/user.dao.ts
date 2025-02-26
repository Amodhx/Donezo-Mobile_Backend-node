import UserModel from "../../model/user.model";
import prisma from "../../../prisma/client";
import userController from "../../controller/user.controller";
import {User} from "@prisma/client";

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
            const userObj:User = await this.getUserByEmail(user.email);
            return await prisma.user.update({
                where : {
                    user_id : userObj?.user_id
                },
                data: {
                    full_name: userObj?.full_name,
                    email: userObj?.email,
                    password: userObj?.password
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
    async generateUserId(){
        try {
            const users = await prisma.user.findMany({
                select: {
                    user_id : true
                },
            });

            const sortedUsers = users
                .map((user) => {
                    const numberPart = parseInt(user.user_id.split('-')[1]);
                    return { user_id: user.user_id, numberPart };
                })
                .sort((a, b) => b.numberPart - a.numberPart);

            if (sortedUsers.length === 0) {
                return 'USER-1';
            }
            const lastIdNumber = sortedUsers[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `USER-${nextIdNumber}`;
        } catch (error) {
            throw error;
        }
    }
}

const User_dao = new UserDao();
export default User_dao;