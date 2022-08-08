const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
});

// // instance method
// todoSchema.methods = {
//   findActive: function () {
//     return mongoose.model("Todo").find({ status: "inactive" });
//   },
// };
module.exports = userSchema;
