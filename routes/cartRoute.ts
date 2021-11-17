import express from 'express';
import {Router} from 'express'
import * as cartController from '../Controllers/cartController'
const cartRoute = Router();

cartRoute.get('/', cartController.defaultMsg);

cartRoute.get('/addToCart/:pId', cartController.addToCart);

// 6193cb7985caea1a688e6330

// 6193cb7985caea1a688e632f
export default cartRoute;