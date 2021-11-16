import {Router} from 'express'
import * as productController from '../Controllers/productController'
const productRoute = Router();

productRoute.get('/', productController.defaultMsg);

productRoute.post('/newProduct', productController.newProduct);

productRoute.patch('/editProduct/:pId', productController.editProduct);

productRoute.get('/getProductById/:pId', productController.getProductById);

productRoute.post('/allProducts', productController.allProducts);

productRoute.delete('/deleteProduct/:pId', productController.deleteProduct);


export default productRoute;