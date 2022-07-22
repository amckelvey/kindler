const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tech: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tech",
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
