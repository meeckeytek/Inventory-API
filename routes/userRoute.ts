import {Router} from 'express'
import * as userController from '../Controllers/userController'
<<<<<<< HEAD
import { isAuth } from '../middlewares/util';

const userRoute = Router();
=======
const userRoute = Router();

userRoute.get('/', userController.defaultMsg);
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391

//Default message when the default API is visited route
userRoute.get('/', userController.defaultMsg);

<<<<<<< HEAD
//Registering new user route
userRoute.post('/newUser', userController.newUser);

// User authentication route
userRoute.post('/auth', userController.auth);

// Edit user details route
userRoute.patch('/editUser', isAuth, userController.editUser);

=======
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
export default userRoute;