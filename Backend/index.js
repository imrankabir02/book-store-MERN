import express from "express"
import dotenv from "dotenv"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello Kabir! What's going on? Starting Node?");
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
