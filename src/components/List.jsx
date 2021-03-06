var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
      return {ingredients: [], newText: ""};
    },
    componentWillMount: function() {
      Actions.getIngredients();
    },
    onChange: function(event, ingredients) {
      this.setState({ingredients: ingredients});
    },
    onInputChange: function(e) {
      this.setState({newText: e.target.value});
    },
    onClick: function(e) {
      var num = 0;
      Actions.postIngredient(num);
    },
    render: function() {

        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.vote} />;
        });

        return  (
          <div>
          <button onClick={this.onClick}>Add Item</button>
          <ul>{listItems}</ul>
          </div>
        );
    }
});

module.exports = List;
