import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.getJSON("assets/js/data.json").then(function(data) {
      return data.markers;
    });
  },
  actions: {
    markerClick: function() {
      alert('You clicked a marker');
    }
  }
});
