/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');
var RemoveFromCart = React.createClass({
      handleClick:function(){
        AppActions.removeItem(this.props.index);
      },
      render:function(){
        return <button className="btn btn-danger btn-sm" onClick={this.handleClick}>x</button>
      }
    });
module.exports = RemoveFromCart;