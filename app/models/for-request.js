import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  method: DS.attr('string'),
  header: DS.attr('string'),
  dataSave: DS.attr('string')
});
