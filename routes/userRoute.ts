import {Router} from 'express'
import * as userController from '../Controllers/userController'
import { isAuth } from '../middlewares/util';

const userRoute = Router();

//Default message when the default API is visited route
userRoute.get('/', userController.defaultMsg);

//Registering new user route
userRoute.post('/newUser', userController.newUser);

// User authentication route
userRoute.post('/auth', userController.auth);

// Edit user details route
userRoute.patch('/editUser/:uId', isAuth, userController.editUser);


// User details route
userRoute.get('/getUserById/:uId', isAuth, userController.userDetials);

export default userRoute;