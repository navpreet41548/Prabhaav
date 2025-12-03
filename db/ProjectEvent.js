import mongoose from "mongoose";

const ProjectEventSchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  event_type: { type: String, required: true },
  project_id: { type: String, ref: "Project", required: true },
  milestone_id: { type: String, ref: "Milestone" },

  employee_id: { type: String, ref: "Employee" },

  percent_complete: Number,
  actual_date: Date,
  evidence_ids: [{ type: String, ref: "Evidence" }],

  raw_payload: {},
  ingest_ts: { type: Date, default: Date.now }
});

ProjectEventSchema.index({ project_id: 1, milestone_id: 1 });
ProjectEventSchema.index({ employee_id: 1 });

export default mongoose.model("ProjectEvent", ProjectEventSchema);
