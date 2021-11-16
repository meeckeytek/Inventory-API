import message from "../middlewares/messages";
import Cart from "../models/cart.model";

export const defaultMsg = async (req: string, res: any) => {
  res.status(200).json({ message: message.defaultMsg });
};