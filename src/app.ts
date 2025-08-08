import express, { json } from "express";
import cors from "cors";
import { router as index } from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(json());
app.use("/", index);

export default app;
