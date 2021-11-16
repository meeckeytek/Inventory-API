import message from "../middlewares/messages";
import Order from "../models/order.model";

export const defaultMsg = async (req: string, res: any) => {
  res.status(200).json({ message: message.defaultMsg });
};