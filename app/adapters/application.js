import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://scroll-of-heroes.herokuapp.com',
  namespace: 'questions',
  pathForType: function(modelName) {
    if (modelName === 'answer') {
        return 'scroll';
    }
    return this._super.apply(arguments);
  }
});
