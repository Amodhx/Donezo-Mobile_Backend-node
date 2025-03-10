import ExpensesModel from "../model/expenses.model";
import UserModel from "../model/user.model";
import Expenses_dao from "../dao/impl/expenses.dao";
import User_dao from "../dao/impl/user.dao";

class ExpensesService{
    async saveExpenses(expense:ExpensesModel){
        try {
            const  user = await User_dao.getUserByEmail(expense.user_id);
            if (user){
                expense.user_id = user?.user_id;
                expense.expense_id = await Expenses_dao.generateExpenseId();
                return Expenses_dao.create(expense)
            }else {
                throw new Error("USER INVALID");
            }
        }catch (err){
            throw  err;
        }
    }
    async updateExpenses(expense:ExpensesModel){
        try {
            return Expenses_dao.update(expense)
        }catch (err){
            throw  err;
        }
    }
    async deleteExpenses(expense_id:string){
        try {
            return Expenses_dao.delete(expense_id);
        }catch (err){
            throw  err;
        }
    }
    async getExpensesByUser(email:string){
        try {
            return Expenses_dao.getAll(email);
        }catch (err){
            throw  err;
        }
    }
}
const Expenses_service = new ExpensesService();
export default Expenses_service;