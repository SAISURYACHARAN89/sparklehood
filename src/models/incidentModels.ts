import mongoose, { Document, Schema, Model } from "mongoose";

export interface IIncident extends Document {
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
  reported_at: Date;
}

const IncidentSchema: Schema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  severity: { 
    type: String, 
    enum: ["Low", "Medium", "High"], 
    required: true 
  },
  reported_at: { type: Date, default: Date.now },
});

// Add static methods if needed
IncidentSchema.statics = {
  async isValidSeverity(severity: string): Promise<boolean> {
    return ["Low", "Medium", "High"].includes(severity);
  }
};

const Incident: Model<IIncident> = mongoose.model<IIncident>("Incident", IncidentSchema);

export default Incident;