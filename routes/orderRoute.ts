import express from 'express';
import {Router} from 'express'
import * as orderController from '../Controllers/orderController'
const orderRoute = Router();

orderRoute.get('/', orderController.defaultMsg);


export default orderRoute;