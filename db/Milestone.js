import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  project_id: { type: String, ref: "Project", required: true },
  name: { type: String, required: true },

  planned_date: { type: Date, required: true },
  actual_date: { type: Date },

  percent_complete: { type: Number, default: 0 },

  evidence_ids: [{ type: String, ref: "Evidence" }],

  status: { 
    type: String, 
    enum: ["not_started", "in_progress", "completed", "delayed"],
    default: "not_started"
  },

  created_at: { type: Date, default: Date.now }
});

MilestoneSchema.index({ project_id: 1 });
MilestoneSchema.index({ status: 1 });

export default mongoose.model("Milestone", MilestoneSchema);
