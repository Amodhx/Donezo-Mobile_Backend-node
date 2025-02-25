import ExpensesModel from "../../model/expenses.model";
import UserModel from "../../model/user.model";
import prisma from "../../../prisma/client";

class ExpensesDao{
    async create(expense:ExpensesModel){
        try {
            return await prisma.expense.create({
                data: {
                    expense_id: expense.expense_id,
                    name: expense.name,
                    amount: expense.amount,
                    date: expense.date,
                    icon: expense.icon,
                    type: expense.type,
                    user_id: expense.user.user_id
                }
            });

        }catch (err){
            throw  err;
        }
    }
    async getAll(user:UserModel){
        try {
            const userRecord = await prisma.user.findUnique({
                where: { email: user.email },
                include: {
                    expenses: true,
                },
            });
            return  userRecord.expenses;
        }catch (err) {

        }
    }
    async update(expense:ExpensesModel){
        try {
            return await prisma.expense.update({
                where :{
                    expense_id : expense.expense_id
                },
                data: {
                    name: expense.name,
                    amount: expense.amount,
                    date: expense.date,
                    icon: expense.icon,
                    type: expense.type,
                    user_id: expense.user.user_id
                }
            });

        }catch (err){
            throw  err;
        }
    }
    async delete(id:string){
        try {
            return await prisma.expense.delete({
                where : {
                    expense_id : id
                }
            })
        }catch (err){
            throw  err;
        }
    }
}
const Expenses_dao = new ExpensesDao();
export default Expenses_dao;