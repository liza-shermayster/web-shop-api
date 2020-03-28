const mongoose = require('mongoose');

const contactUsSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, require: true },
};
module.exports = mongoose.model('ContactUs', contactUsSchema);
