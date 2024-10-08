const mongoose = require("mongoose");

const ConferenceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
    }
  },
  { timestamps: true }
);

const Conference = mongoose.model("Conference", ConferenceSchema);
module.exports = Conference;
