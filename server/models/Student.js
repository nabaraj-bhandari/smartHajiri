const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  section: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
