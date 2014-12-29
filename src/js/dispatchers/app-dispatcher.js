var Dispatcher = require('./dispatcher'),
    _  = require('lodash'),
    AppDispatcher = _.assign({}, Dispatcher.prototype, {
      handleViewAction: function(action){
        this.dispatch({
          source: 'VIEW_ACTION',
          action:action
        });
      }
    });

module.exports = AppDispatcher;
