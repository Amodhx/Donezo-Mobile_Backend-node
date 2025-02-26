import JWT_service from "../service/jwt.service";
import UserDao from "../dao/impl/user.dao";
import {Request, Response} from "express";


class UserController{
    async signIn(req:Request,resp:Response){
        try {
            resp.status(201).send(await JWT_service.signIn(req.body))
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async signUp(req:Request,resp:Response){
        try {
            resp.status(201).send(await JWT_service.signUp(req.body))
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async forgotPassword(req:Request,resp:Response){
        try {
            resp.status(201).send(await UserDao.update(req.body));
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
}
const User_controller = new UserController();
export default User_controller;