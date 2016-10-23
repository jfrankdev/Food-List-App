var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

console.log('main.jsx is working');

ReactDOM.render(<List />, document.getElementById('ingredients'));
