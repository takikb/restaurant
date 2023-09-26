import express from 'express'



import { MenuItem } from '../models/menu.js';
import { CartItem } from '../models/cart.js';

const router = express.Router()

// Add item to menu
router.post('/menu/add', async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    type:req.body.type,
    price: req.body.price,
    ingredients: req.body.ingredients
  });

  try {
    await menuItem.save();
    res.send('Menu item added');
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});

// View menu
router.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({});
    res.send(menuItems)
    //res.sendFile(__dirname + './public/menu.html');
  } catch (error) {
    res.status(500).send('Something went wrong'); 
  }
});

// Update menu item
router.post('/menu/update/:id', async (req, res) => {
  const menuItemId = req.params.id;
  const updates = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    ingredients: req.body.ingredients
  };

  try {
    await MenuItem.findByIdAndUpdate(menuItemId, updates);
    ///res.send("success")
    res.redirect('/menu');
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});


// Add item to cart
router.post('/cart/add', async (req, res) => {
  const menuItemId = req.body.menuItem;
  const quantity = req.body.quantity;

  try {
    const cartItem = await CartItem.findOne({ menuItem: menuItemId });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      const newCartItem = new CartItem({
        menuItem: menuItemId,
        quantity: quantity
      });
      await newCartItem.save();
    }
    res.send('Item added to cart');
  } catch (error) {
    res.status(500).send(error);
  }
});

// View cart
router.get('/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find({}).populate('menuItem'); //allows to simply refer to a document inside a different collection to another document's field that resides in a different field.
    res.send(cartItems)
    //res.render('cart', { cartItems });
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});

// Remove item from cart
router.post('/cart/remove/:id', async (req, res) => {
  const cartItemId = req.params.id;

  try {
    await CartItem.findByIdAndDelete(cartItemId);
    //res.send("success")
    res.redirect("/cart");
    //res.json({ redirectUrl: '/cart' })
    //res.send(response)
    //console.log(success); 
  } catch (error) {
    res.status(500).send('Something went wrong');
    console.log(error);
  }
});



export {router as controllerRouter}
