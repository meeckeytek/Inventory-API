import {Router} from 'express'
import * as userController from '../Controllers/userController'
const userRoute = Router();

userRoute.get('/', userController.defaultMsg);


export default userRoute;