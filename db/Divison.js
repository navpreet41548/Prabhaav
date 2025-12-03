import mongoose from "mongoose";

const DivisionSchema = new mongoose.Schema({
  _id: { type: String }, // uuid
  name: { type: String, required: true },
  org_id: { type: String },
  manager_id: { type: String, ref: "Employee" },

  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Division", DivisionSchema);
