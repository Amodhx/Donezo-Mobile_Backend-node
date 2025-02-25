import {Router} from "express";

class UserRoute{
    router;

    constructor() {
        this.router = Router;
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const UserRouter = new UserRoute();
export default UserRouter;