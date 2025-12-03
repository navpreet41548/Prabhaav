import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  _id: { type: String }, // uuid
  name: { type: String, required: true },
  division_id: { type: String, ref: "Division", required: true },

  created_at: { type: Date, default: Date.now }
});

TeamSchema.index({ division_id: 1 });

export default mongoose.model("Team", TeamSchema);
