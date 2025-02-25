import ExpensesModel from "../model/expenses.model";
import UserModel from "../model/user.model";
import Expenses_dao from "../dao/impl/expenses.dao";

class ExpensesService{
    async saveExpenses(expense:ExpensesModel){
        try {
            expense.expense_id = "EXPENSE-1"
            return Expenses_dao.create(expense)
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