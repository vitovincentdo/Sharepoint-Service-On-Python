import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | routes/admin/job/insert-job', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:routes/admin/job/insert-job');
    assert.ok(route);
  });
});
