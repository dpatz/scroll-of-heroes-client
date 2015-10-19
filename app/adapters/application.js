import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://scroll-of-heroes.herokuapp.com',
  namespace: 'questions'
});
