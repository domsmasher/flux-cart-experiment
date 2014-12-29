/** @jsx React.DOM */
var React = require('react'),
    AppStore = require('../stores/app-store'),
    StoreWatchMixin = function (cb) {
      return {
        getInitialState:function(){
          return cb(this);
        },
        componentWillMount:function(){
          AppStore.addChangeListener(this._onChange)
        },
        componentWillUnmount:function(){
          AppStore.removeChangeListener(this._onChange)
        },
        _onChange:function(){
          this.setState(cb(this))
        }
      };
    };


module.exports = StoreWatchMixin;