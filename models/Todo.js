// All Schema is defined Here

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
    },
    createDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updateDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { collection: "todos" }
);

module.exports = mongoose.model("Todo", todoSchema);
