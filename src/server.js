import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server: ", err.message);
  } else {
    console.log("Server is up and running on PORT", PORT);
  }
});
