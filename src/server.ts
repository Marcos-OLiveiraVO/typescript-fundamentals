import express from "express";
import { createCourse } from "./routes.";

const app = express();
const PORT = 3000;

app.get("/", createCourse);

app.listen(PORT, () => console.log("server is running"));
