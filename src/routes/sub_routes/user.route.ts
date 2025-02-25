import {Router} from "express";
import User_controller from "../../controller/user.controller";
import Authentication_Check from "../../middleware/authentication";

class UserRoute{
    router;

    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/signIn',User_controller.signIn)
        this.router.post('/signUp',User_controller.signUp)
        this.router.post('/forgotPassword',Authentication_Check.verifyToken,User_controller.forgotPassword)
    }
}
const UserRouter = new UserRoute();
export default UserRouter;