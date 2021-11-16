import message from "../middlewares/messages";
import Inventory from "../models/inventory.model";

export const defaultMsg = async (req: string, res: any) => {
  res.status(200).json({ message: message.defaultMsg });
};