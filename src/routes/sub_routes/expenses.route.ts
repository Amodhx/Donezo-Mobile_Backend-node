import {Router} from "express";

class ExpensesRoute{
    router;
    constructor() {
        this.router = Router;
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const ExpensesRouter = new ExpensesRoute();
export default ExpensesRouter;