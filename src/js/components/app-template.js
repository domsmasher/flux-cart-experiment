/** @jsx React.DOM */
var React = require('react'),
    Header = require('./header/app-header'),
    Template = React.createClass({
      render:function(){
        return  (
          <div>
            <Header />
            <div className="container">
              {this.props.children}
            </div>
          </div>
        )
      }
    });
module.exports = Template;
