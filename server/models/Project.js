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
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  tech: [
    {
      name: {
        type: String,
        trim: true,
      },
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
