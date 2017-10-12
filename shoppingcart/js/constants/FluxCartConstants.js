var keyMirror = require("react/lib/keyMirror");

// defione action constants
module.exports = keyMirror({
  CART_ADD: null, // adds item to cart
  CART_REMOVE: null, // remopve item from cart
  CART_VISIBLE: null, // shows or hides the cart
  SET_SELECTED: null, // select a product option
  RECIEVE_DATA: null // loads our mock data
});
