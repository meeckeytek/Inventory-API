import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";

import userRoute from "./routes/userRoute";
import cartRoute from "./routes/cartRoute";
import productRoute from "./routes/productRoute";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    // resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.URI!,
      ttl: 7 * 24 * 60 * 60,
    }),
    // cookie: { maxAge: 420 * 60 * 1000 }, //include in documention... To expire in a week
  })
);

app.use((req: any, res: any, next: any) => {
  res.locals.session = req.session;
  next();
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);

mongoose
  .connect(process.env.URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const port = process.env.PORT || 1451;
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
