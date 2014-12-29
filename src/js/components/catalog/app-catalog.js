/** @jsx React.DOM */
var React = require('react'),
    AppStore = require('../../stores/app-store'),
    AddToCart = require('./app-addtocart'),
    CatalogItem = require('./app-catalogitem'),
    StoreWatchMixin = require('../../mixins/StoreWatchMixin');

function getCatalog(){
  return {items: AppStore.getCatalog()}
}

var Catalog = React.createClass({
      mixins:[new StoreWatchMixin(getCatalog)],
      render:function(){
          var items = this.state.items.map(function(item){
            return <CatalogItem item={item} />
          })
          return (
            <div className="row">
            {items}
            </div>
          )
      }
    });
module.exports = Catalog;
