import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  _id: { type: String }, // uuid
  emp_code: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },

  designation: { type: String },
  role: { type: String, enum: ["hq", "field", "hybrid", "manager"], required: true },

  division_id: { type: String, ref: "Division" },
  team_id: { type: String, ref: "Team" },
  manager_id: { type: String, ref: "Employee" },

  joining_date: { type: Date },
  status: { type: String, enum: ["active", "inactive", "transferred"], default: "active" },

  meta: {
    grade: String,
    skills: [String],
    location: { lat: Number, lng: Number }
  },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Indexes
EmployeeSchema.index({ emp_code: 1 }, { unique: true });
EmployeeSchema.index({ division_id: 1 });
EmployeeSchema.index({ team_id: 1 });

export default mongoose.model("Employee", EmployeeSchema);
