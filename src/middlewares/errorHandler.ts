import { Request, Response, NextFunction } from "express";
import { MongoError } from "mongodb";

export const errorHandler = (
  err: Error | MongoError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);

  if (!err) {
    res.status(500).json({ message: "Unknown Error" });
    return;
  }

  if (err.name === "ValidationError") {
    res.status(400).json({ message: err.message });
    return;
  }

  if (err.name === "CastError") {
    res.status(400).json({ message: "Invalid ID format" });
    return;
  }

  if ((err as MongoError).code === 11000) {
    res.status(400).json({ message: "Duplicate key error" });
    return;
  }

  res.status(500).json({ message: "Internal Server Error" });
};
