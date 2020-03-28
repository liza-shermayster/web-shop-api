const mongoose = require('mongoose');
const menuItemsSubSchema = {
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, require: true },
  img: { type: String }
}
const menuItemsSchema = new mongoose.Schema(menuItemsSubSchema);

//mongodb+srv://liza:<tQj9_cc-qwC!qq8@cluster0-eb692.mongodb.net/test?retryWrites=true

module.exports = mongoose.model('MenuItem', menuItemsSchema);



