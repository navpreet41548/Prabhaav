import mongoose from "mongoose";

const FileActivitySchema = new mongoose.Schema({
  _id: { type: String }, // uuid

  event_type: { 
    type: String, 
    enum: ["FILE_RECEIVED", "FILE_FORWARDED", "FILE_RETURNED", "FILE_CLOSED"], 
    required: true 
  },

  file_id: { type: String, required: true },

  employee_id: { type: String, ref: "Employee" },
  division_id: { type: String, ref: "Division" },

  received_at: Date,
  closed_at: Date,

  doc_type: String,
  meta: {},

  raw_payload: {},
  ingest_ts: { type: Date, default: Date.now }
});

FileActivitySchema.index({ employee_id: 1, received_at: 1 });
FileActivitySchema.index({ file_id: 1 });

export default mongoose.model("FileActivity", FileActivitySchema);
