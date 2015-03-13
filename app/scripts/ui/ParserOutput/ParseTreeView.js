'use strict';

/** @jsx React.DOM */
var PureRenderMixin = require('React/addons').addons.PureRenderMixin;

var ParseTreeView = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {

    var preStyle = {
      maxHeight: 175,
      width: '100%',
      fontSize: 11
    };

    var parserDebugger = this.props.parserDebugger || [];

    var text = parserDebugger.map(function (step) {
      var res = '';
      if (step.action === 'reduce') {
        res += ' --> ';
      }
      res += step.action + ': ' + JSON.stringify(step.text);
      return res;
    }).join('\n');
    return (
      <div>
        <h5>Parse tree</h5>
        <pre style={preStyle}>{text}</pre>
      </div>
    );
  }
});

module.exports = ParseTreeView;

