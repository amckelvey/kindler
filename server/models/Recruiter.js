const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const recSchema = new Schema({
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
});

recSchema.pre("save", async (next) => {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

recSchema.methods.isCorrectPassword = async (password) => {
  return bcrypt.compare(password, this.password);
};

const Recruiter = model("Recruiter", recSchema);

module.exports = Recruiter;
