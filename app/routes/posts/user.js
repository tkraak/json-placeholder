import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('post', { userId: params.id });
  },
  setupController(controller, model) {
    controller.set('posts', model);
  }
});
