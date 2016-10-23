var React = require('react');
var ListItem = React.createClass({
    render: function() {

        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});
console.log('ListItem.jsx is working');
module.exports = ListItem;
