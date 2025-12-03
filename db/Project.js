import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  _id: { type: String }, // uuid
  code: { type: String, unique: true, required: true },
  name: { type: String, required: true },

  division_id: { type: String, ref: "Division" },
  pi_employee_id: { type: String, ref: "Employee" },

  status: { 
    type: String, 
    enum: ["not_started", "in_progress", "completed", "delayed"], 
    default: "in_progress" 
  },

  planned_start: Date,
  planned_end: Date,
  planned_budget: Number,

  metadata: {
    type: { type: String },
    priority: { type: String }
  },

  created_at: { type: Date, default: Date.now }
});

ProjectSchema.index({ code: 1 }, { unique: true });
ProjectSchema.index({ division_id: 1 });

export default mongoose.model("Project", ProjectSchema);
