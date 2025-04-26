import { RequestHandler } from "express";

const validateIncident: RequestHandler = (req, res, next) => {
  const { title, description, severity } = req.body;

  if (!title || !description || !severity) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  if (!["Low", "Medium", "High"].includes(severity)) {
    res.status(400).json({ message: "Invalid severity value" });
    return;
  }

  next();
};

export default validateIncident;