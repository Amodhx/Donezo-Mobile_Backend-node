import {Request, Response, Router} from "express";
import ExpensesRouter from "./sub_routes/expenses.route";

class MainRoute{
    router:Router

    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.use('/expenses',ExpensesRouter.router)
    }

}
const MainRouter = new MainRoute();
export default MainRouter;