/** @jsx React.DOM */
var React = require('react'),
    AppActions = require('../../actions/app-actions'),
    Decrease = React.createClass({
      handleClick:function(){
        AppActions.decreaseItem(this.props.index);
      },
      render:function(){
        return <button  className="btn btn-danger btn-sm" onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button>
      }
    });
module.exports = Decrease;
