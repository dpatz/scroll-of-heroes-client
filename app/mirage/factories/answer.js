import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  gravatar_hash: '30eee46693c9f56fc230b88a4dbefaa2',
  answered: faker.random.boolean,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
});
