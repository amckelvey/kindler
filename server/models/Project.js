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
      name: {
        type: String,
        trim: true,
      },
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
