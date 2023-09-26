import mongoose from 'mongoose'

const cartItemSchema = new mongoose.Schema({
  menuItem: {
    type: String,
    ref: 'MenuItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

export const CartItem = mongoose.model('CartItem', cartItemSchema);
