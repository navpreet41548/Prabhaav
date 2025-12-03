import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  employee_id: { type: String, ref: "Employee", required: true },
  period: { type: String, required: true }, // YYYY-MM

  kpi_subtotal: Number,
  behavior_subtotal: Number,
  total_score: Number,

  weight_profile_id: { type: String },
  kpi_norm_refs: [String],

  frozen_at: Date,
  frozen_by: { type: String, ref: "Employee" },

  compute_details: {
    version: String,
    compute_ts: Date,
    compute_by: String
  },

  status: { type: String, enum: ["draft", "final"], default: "draft" }
});

ScoreSchema.index({ employee_id: 1, period: 1 }, { unique: true });
ScoreSchema.index({ total_score: -1 });

export default mongoose.model("Score", ScoreSchema);
