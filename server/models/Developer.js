const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const devSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  position: {
    type: String,
  },
  job_status: {
    type: String,
  },
  bio: {
    type: String,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

devSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

devSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Developer = model("Developer", devSchema);

module.exports = Developer;
