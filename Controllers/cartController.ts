import message from "../middlewares/messages";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import msg from "../middlewares/messages";

export const defaultMsg = async (req: string, res: any) => {
  res.status(200).json({ message: message.defaultMsg });
};

export const addToCart = async (req: any, res: any) => {
  const { pId } = req.params;

  let product: any;

  try {
    product = await Product.findById(pId);
  } catch (error) {
    return res.status(500).json({ message: msg.serverError });
  }

  if (!product) {
    return res.status(404).json({ message: msg.notFound });
  }

  // console.log(product._id)

  let existingCart: any;
  let eachProduct:any;
  try {
    existingCart = await Cart.findOne({
      customerId: req.user.userId,
      status: "Pending",
    });
  } catch (error) {
    return res.status(500).json({ message: msg.serverError });
  }
  // console.log(existingCart)
  let cartItems: any = existingCart.products;
  // cartItems.forEach((prod:any) => console.log(prod))
  if (!existingCart) {
    const cart: any = new Cart({
      customerId: req.user.userId,
      products: product,
      totalPrice: product.price,
    });
    await cart.save();
  } else {
    const filteredProd = cartItems.filter((prod:any) => prod._id === product._id)
    console.log(filteredProd)
    // cartItems.forEach((prod:any) =>{
    //   console.log(prod._id)
    //   console.log(product._id)
    //   console.log(prod)
    //   // if(prod._id === product._id){
    //   //   console.log(prod)
    //   // }
    // })
    //   // console.log(eachProduct)
    // // }  
        
    // })
    // forEach(eachProduct in existingCart.products)
    // // console.log('products ' + eachProduct._id)
    // console.log(eachProduct._id == product._id)
    //   // if (eachProduct._id === product._id) {
        
      //   console.log(eachProduct.quantity)
      //   eachProduct.quantity = eachProduct.quantity + 1;
      //   await existingCart.save();
      //   console.log(eachProduct.quantity)
      //   res.send('updated product quantity')
      // } else {
      //   await Cart.findByIdAndUpdate(existingCart._id, {
      //     $push: { products: product },
      //   });
      //   return res.status(201).json({ message: 'added new product' });
      // }
      
  }

  res.send("done");
};
