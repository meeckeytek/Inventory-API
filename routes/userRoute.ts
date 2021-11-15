import express from 'express';
import {Router} from 'express'
import * as adminController from '../Controllers/userController'
const adminRoute = Router();

adminRoute.get('/', adminController.defaultMsg);


export default adminRoute;