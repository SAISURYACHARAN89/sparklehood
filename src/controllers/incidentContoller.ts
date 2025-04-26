import { Request, Response, NextFunction } from "express";
import Incident, { IIncident } from "../models/incidentModels";

export const fetchIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    res.json(incidents);
  } catch (error) {
    next(error);
  }
};

export const newIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, description, severity } = req.body;
    const incident = new Incident({ title, description, severity });
    const savedIncident = await incident.save();
    res.status(201).json(savedIncident);
  } catch (error) {
    next(error);
  }
};

export const fetchSpecificIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      res.status(404).json({ message: "Incident not found" });
      return;
    }
    res.json(incident);
  } catch (error) {
    next(error);
  }
};

export const deleteIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      res.status(404).json({ message: "Incident not found" });
      return;
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};