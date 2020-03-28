const mongoose = require('mongoose');

const menuItemsSubSchema = {
  title: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true }
}
const orderSchema = mongoose.Schema({
  user: { type: String, require: true },
  menuItems: [menuItemsSubSchema],
  total: { type: Number, require: true }
}
);

module.exports = mongoose.model('Order', orderSchema);
