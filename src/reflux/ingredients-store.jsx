var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
    listenables: [Actions],
    getIngredients: function() {
      HTTP.get('/ingredients')
      .then(function(json){
        this.ingredients = json;
        this.fireUpdate();
      }.bind(this));
    },
    postIngredient: function(num) {

      if (!this.ingredients) {
        this.ingredients = [];
      }

      var ingredient = {
        "id": Math.random(Date.now() / 1000) + num,
        "vote": num

      };

      this.ingredients.push(ingredient);
      this.fireUpdate();

      HTTP.post('/ingredients', ingredient)
      .then(function(response) {
        this.getIngredients();
      }.bind(this));

    },
    fireUpdate: function() {
      this.trigger('change', this.ingredients);
    }
});

module.exports = IngredientStore;
