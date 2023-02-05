import "dotenv/config";
import express from "express";
import { router } from "routes";


//import "reflect-metadata";

const app = express();
app.use(express.json());
app.use(router)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port " + process.env.PORT);
})
