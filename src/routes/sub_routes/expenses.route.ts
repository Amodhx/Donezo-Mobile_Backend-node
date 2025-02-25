import {Router} from "express";
import Expenses_controller from "../../controller/expenses.controller";
import {Request, Response} from "express";
import Authentication_Check from "../../middleware/authentication";

class ExpensesRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveExpenses',Authentication_Check.verifyToken,Expenses_controller.saveExpenses)
        this.router.patch('/updateExpenses',Authentication_Check.verifyToken,Expenses_controller.updateExpenses)
        this.router.delete('/deleteExpenses',Authentication_Check.verifyToken,Expenses_controller.deleteExpenses)
        this.router.get('/getAllExpenses',Authentication_Check.verifyToken,Expenses_controller.getAllExpensesByUser)
    }
}
const ExpensesRouter = new ExpensesRoute();
export default ExpensesRouter;