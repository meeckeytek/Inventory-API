import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import * as dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import cartRoute from "./routes/cartRoute";
import inventoryRoute from './routes/inventoryRoute';
import orderRoute from './routes/orderRoute';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static("uploads"))


app.use(express.static(path.join("uploads")));

app.use("/api/v1/user", userRoute);
<<<<<<< HEAD
app.use("/api/v1/inventory", inventoryRoute);
app.use("/api/v1/cart", cartRoute);
=======
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/inventory", inventoryRoute);
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
app.use("/api/v1/order", orderRoute);

mongoose
  .connect(process.env.URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
<<<<<<< HEAD
    const port = process.env.PORT || 1049;
=======
    const port = process.env.PORT || 1149;
>>>>>>> 3ccdccd5275eaa4ac3d06324cefeae93ebdce391
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
