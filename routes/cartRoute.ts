import express from 'express';
import {Router} from 'express'
import * as cartController from '../Controllers/cartController'
const cartRoute = Router();

cartRoute.get('/', cartController.defaultMsg);


export default cartRoute;