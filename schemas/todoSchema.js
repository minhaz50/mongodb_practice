const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// instance method
todoSchema.methods = {
  findActive: function () {
    return mongoose.model("Todo").find({ status: "inactive" });
  },
};
module.exports = todoSchema;
