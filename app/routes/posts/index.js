import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    controller.set('posts', model);
  }
});
