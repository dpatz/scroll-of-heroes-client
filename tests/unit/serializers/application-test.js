import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('answer', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:application']
});

// Replace this with your real tests.
test('it serializes and deserializes correctly', function(assert) {
  const answerObject = {
    firstName: 'Sergi',
    lastName: 'Pons Freixes',
    gravatarHash: '30eee46693c9f56fc230b88a4dbefaa2',
    correct: true,
    answered: new Date('2015-10-16T00:13:46+00:00'),
  };

  const answerModel = this.subject(answerObject);

  const serializedRecord = answerModel.serialize();
  serializedRecord['id'] = 2;
  serializedRecord['answered'] = serializedRecord['answered'].replace('Z', '');

  const answerPayload = {
    answers: [{
      id: 2,
      first_name: 'Sergi',
      last_name: 'Pons Freixes',
      gravatar_hash: '30eee46693c9f56fc230b88a4dbefaa2',
      correct: true,
      answered: '2015-10-16T00:13:46.000',
    }]
  };

  assert.deepEqual(answerPayload['answers'][0], serializedRecord);

  Ember.run(() => {
    this.subject().store.pushPayload('answer', answerPayload);
    Ember.run(() => {
      console.log(this.subject().store.peekRecord('answer', 2).toJSON());
    });
  });

  assert.ok(serializedRecord);
});
