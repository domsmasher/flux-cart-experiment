/** @jsx React.DOM */
var React = require('react'),
    Catalog = require('./catalog/app-catalog'),
    Cart = require('./cart/app-cart'),
    CatalogDetail = require('./product/app-catalogdetail'),
    Template = require('./app-template'),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location,
    APP = React.createClass({
      render:function(){
        return (
          <Template>
            <Locations>
              <Location path="/" handler={Catalog} />
              <Location path="/cart" handler={Cart} />
              <Location path="/item/:item" handler={CatalogDetail} />
            </Locations>
          </Template>
        )
      }
    });
module.exports = APP;
