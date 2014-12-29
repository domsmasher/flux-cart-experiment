/** @jsx React.DOM */
var React = require('react');
var CartSummary = require('./app-cartsummary');

var Header = React.createClass({
      render:function(){
        return (
          <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Brand</a>
              </div>
              <div className="navbar-btn navbar-right">
                <CartSummary />
              </div>
            </div>
          </nav>
        )
      }
    });
module.exports = Header;
