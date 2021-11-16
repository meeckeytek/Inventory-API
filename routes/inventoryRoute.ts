import express from 'express';
import {Router} from 'express'
import * as inventoryController from '../Controllers/inventoryController'
const inventoryRoute = Router();

inventoryRoute.get('/', inventoryController.defaultMsg);


export default inventoryRoute;