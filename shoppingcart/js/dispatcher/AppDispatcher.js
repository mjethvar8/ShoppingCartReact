var Dispatcher = require("flux").Dispatcher;

// create dispatcher instance
var AppDispatcher = new Dispatcher();

// convenience method to handle dispatch reuqests
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: "VIEW_ACTION",
    action: action
  });
};

module.exports = AppDispatcher;
