import ExpensesModel from "../../model/expenses.model";
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
                    user_id: expense.user_id
                }
            });

        }catch (err){
            throw  err;
        }
    }
    async getAll(email:string){
        try {
            const userRecord = await prisma.user.findUnique({
                where: { email: email },
                include: {
                    expenses: true,
                },
            });
            if (userRecord){
                return  userRecord.expenses;
            }else {
                return []
            }

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
                    user_id: expense.user_id
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
    async generateExpenseId(){
        try {
            const expenses = await prisma.expense.findMany({
                select: {
                    expense_id : true
                },
            });

            const sortedExpenses = expenses
                .map((expense) => {
                    const numberPart = parseInt(expense.expense_id.split('-')[1]);
                    return { expense_id: expense.expense_id, numberPart };
                })
                .sort((a, b) => b.numberPart - a.numberPart);

            if (sortedExpenses.length === 0) {
                return 'EXPENSE-1';
            }
            const lastIdNumber = sortedExpenses[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `EXPENSE-${nextIdNumber}`;
        } catch (error) {
            throw error;
        }
    }
}
const Expenses_dao = new ExpensesDao();
export default Expenses_dao;