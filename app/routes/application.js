import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    console.log('gettings answers');
    return this.store.query('answer', {answered: true});
  }
});
