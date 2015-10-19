import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  first_name: faker.name.firstName,
  last_name: faker.name.lastName,
  gravatar_hash: '30eee46693c9f56fc230b88a4dbefaa2',
  correct: faker.random.boolean,
  answered: faker.date.past,
});
