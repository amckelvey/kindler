const { Schema, Types } = require("mongoose");

const techSchema = new Schema(
  {
    techId: {
      type: Schema.Types.ObjectId(),
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = techSchema;
