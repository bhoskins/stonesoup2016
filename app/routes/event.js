import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON("assets/js/data.json").findRecord('event', params.event_id);
  }
});
