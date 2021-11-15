import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import * as dotenv from "dotenv";
import adminRoute from "./routes/userRoute";

dotenv.config();

const app = express();

// app.use('/static', express.static("uploads"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join("uploads")));

app.use("/api/v1/admin", adminRoute);

mongoose
  .connect(process.env.URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const port = process.env.PORT || 1259;
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
