const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaEmployee = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model('Employee', SchemaEmployee);