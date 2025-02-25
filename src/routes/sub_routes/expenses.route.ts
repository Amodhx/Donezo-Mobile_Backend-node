import {Router} from "express";
import Expenses_controller from "../../controller/expenses.controller";

class ExpensesRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveExpenses',Expenses_controller.saveExpenses)
        this.router.patch('/updateExpenses',Expenses_controller.updateExpenses)
        this.router.post('/deleteExpenses',Expenses_controller.deleteExpenses)
        this.router.post('/getAllExpenses',Expenses_controller.getAllExpensesByUser)
    }
}
const ExpensesRouter = new ExpensesRoute();
export default ExpensesRouter;