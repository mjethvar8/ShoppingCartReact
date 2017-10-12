var FluxCartActions = require("../actions/FluxCartActions");

module.exports = {
  // load our mock product data from localstorage into productstore via action

  getProductData: function() {
    var data = JSON.parse(localStorage.getItem("product"));
    FluxCartActions.receiveProduct(data);
  }
};
