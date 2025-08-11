import dotenv from "dotenv";
dotenv.config()
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
