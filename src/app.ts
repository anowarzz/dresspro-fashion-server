import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Testing API HomeRoute
const test = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome To Dresspro Fashion Server",
    note: "Winter is coming",
  });
};

app.get("/", test);
export default app;

// route error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use(globalErrorHandler);
