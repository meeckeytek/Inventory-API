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

  let cartItems = req.session.cart

const cart = new Cart(req.session.cart ? req.session.cart : {})

  res.send("done");
};
