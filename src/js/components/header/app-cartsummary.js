/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store');
var Link = require('react-router-component').Link;
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function CartTotals () {
  return AppStore.getCartTotals();
};

var CartSummary = React.createClass({
      mixins:[new StoreWatchMixin(CartTotals)],
      render:function(){
        return (
          <div>
            <Link
              href="/cart"
              className="btn btn-success">
              <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Cart items: {this.state.qty} / $ {this.state.total}
            </Link>
          </div>
        )
      }
    });
module.exports = CartSummary;
