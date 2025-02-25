import {Router} from "express";

class ExpensesRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const ExpensesRouter = new ExpensesRoute();
export default ExpensesRouter;