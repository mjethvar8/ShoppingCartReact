window.React = require("react");
var ProductData = require("./ProductData");
var CartAPI = require("./utils/CartAPI");
var FluxCartApp = require("./components/FluxCartApp.react");

// load our mock product data into localstorage
ProductData.init();

// load mock api call
CartAPI.getProductData();

//render fluxcartapp controller view
React.render(<FluxCartApp />, document.getElementById("flux-cart"));
