import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | routes/admin/article/edit-article', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:routes/admin/article/edit-article');
    assert.ok(controller);
  });
});
