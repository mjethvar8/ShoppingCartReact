var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var FluxCartConstants = require("../constants/FluxCartConstants");
var _ = require("underscore");

// define initial data points
var _product = {},
  _selected = null;

// method to load product data from mock api
function loadProductData(data) {
  (_product = data[0]), (_selected = data[0].variants[0]);
}

// method to set the currently selected product variation
function setSelected(index) {
  _selected = _product.variants[index];
}

// extend product store with event emitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {
  // return product data
  getProduct: function() {
    return _product;
  },

  // return selected product
  getSelected: function() {
    return _selected;
  },

  // emit change event
  emitChange: function() {
    this.emit("change");
  },

  // add change listener
  addChangeListener: function(callback) {
    this.on("change", callback);
  },

  // remove change listener
  removeChangeListener: function(callback) {
    this.removeChangeListener("change", callback);
  }
});

// register callback with appdispatcher
AppDispatcher.register(function(paylod) {
  var action = paylod.action;
  var text;

  switch (action.actionType) {
    // respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    // respond to SELECT_PRODUCT action
    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;
    default:
      return true;
  }

  ProductStore.emitChange();

  return true;
});

module.exports = ProductStore;
