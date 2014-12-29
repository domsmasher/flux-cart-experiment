/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');
var AddToCart = React.createClass({
      handleClick:function(){
        AppActions.addItem(this.props.item);
      },
      render:function(){
        return (
          <button className="btn btn-info btn-sm" onClick={this.handleClick}>
            <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Add To cart
          </button>
        )
      }
    });
module.exports = AddToCart;
