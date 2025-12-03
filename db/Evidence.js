import mongoose from "mongoose";

const EvidenceSchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  uploaded_by: { type: String, ref: "Employee" },
  project_id: { type: String, ref: "Project" },
  milestone_id: { type: String, ref: "Milestone" },

  file_name: String,
  s3_key: String,
  mime: String,
  size: Number,

  geo: {
    lat: Number,
    lng: Number,
    accuracy: Number
  },

  timestamp: Date,
  hash: String,

  status: { type: String, enum: ["available", "pending", "failed"], default: "available" },
  ingest_ts: { type: Date, default: Date.now }
});

EvidenceSchema.index({ project_id: 1 });
EvidenceSchema.index({ milestone_id: 1 });

export default mongoose.model("Evidence", EvidenceSchema);
