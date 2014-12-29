/** @jsx React.DOM */
var React = require('react'),
    AppStore = require('../../stores/app-store'),
    RemoveFromCart = require('./app-removefromcart'),
    Increase = require('./app-increase'),
    Decrease = require('./app-decrease'),
    StoreWatchMixin = require('../../mixins/StoreWatchMixin'),
    Link = require('react-router-component').Link;

function cartItems(){
  return {items: AppStore.getCart()}
}

var Cart = React.createClass({
  mixins: [new StoreWatchMixin(cartItems)],
  render:function(){
    var total=0,
        items = this.state.items.map(function(item, i){
            var subtotal = item.cost*item.qty;
            total+=subtotal;
            return (
                <tr key={i}>
                  <td><RemoveFromCart index={i} /></td>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>
                    <Increase index={i} />
                    <Decrease index={i} />
                  </td>
                  <td>${subtotal}</td>
                </tr>
            )
        })
    return (
      <div>
        <table className="table table-hover">
        <thead>
        <tr>
        <th></th>
        <th>Item</th>
        <th>Qty</th>
        <th></th>
        <th>Subtotal</th>
        </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
        <tfoot>
        <tr>
        <td colSpan="4" className="text-right">Total</td>
        <td>${total}</td>
        </tr>
        </tfoot>
        </table>
        <Link className="btn btn-info" href='/'><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Continue Shopping</Link>
      </div>
    )
  }
});
module.exports = Cart;
