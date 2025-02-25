import {Request, Response} from "express";
import Expenses_service from "../service/expenses.service";
class ExpensesController{
    async saveExpenses(req:Request,resp:Response){
        try {
            resp.status(201).send(await Expenses_service.saveExpenses(req.body));
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async updateExpenses(req:Request,resp:Response){
        try {
            resp.status(201).send(await Expenses_service.updateExpenses(req.body));
        }catch (err){
            resp.status(500).send(err);
        }
    }

    async deleteExpenses(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await Expenses_service.deleteExpenses(id))
            }
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async getAllExpensesByUser(req:Request,resp:Response){
        try {
            const email = req.query['email']
            if (typeof email === "string"){
                resp.status(201).send(await Expenses_service.getExpensesByUser(email));
            }
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
const Expenses_controller = new ExpensesController();
export default Expenses_controller;