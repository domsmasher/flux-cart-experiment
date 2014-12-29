/** @jsx React.DOM */
var React = require('react'),
    AppActions = require('../../actions/app-actions'),
    Increase = React.createClass({
      handleClick:function(){
        AppActions.increaseItem(this.props.index);
      },
      render:function(){
        return <button  className="btn btn-success btn-sm" onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></button>
      }
    });
    
module.exports = Increase;
