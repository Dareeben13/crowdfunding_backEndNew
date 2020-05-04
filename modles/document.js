const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true
    },

    project: {
      type: ObjectId,
      ref: "Project",
      required: true
    },
    file: {
      data: Buffer,
      contentType: String,
      path: String,
      name: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
