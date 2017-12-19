import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  post: hasMany('user'),

  name: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  website: attr('string'),
});
