import mongoose from "mongoose";

const KpiNormSchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  kpi_code: { type: String, required: true },
  entity_type: { type: String, enum: ["employee", "team", "project", "org"], required: true },
  entity_id: { type: String, required: true },

  period: { type: String, required: true }, // YYYY-MM

  raw_value: Number,
  norm_value: { type: Number, required: true },

  num_datapoints: Number,
  source_event_ids: [String],

  compute_version: String,
  computed_at: { type: Date, default: Date.now }
});

KpiNormSchema.index(
  { kpi_code: 1, entity_type: 1, entity_id: 1, period: 1 },
  { unique: true }
);

export default mongoose.model("KpiNorm", KpiNormSchema);
