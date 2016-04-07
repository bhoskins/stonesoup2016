import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    markerClick: function() {
      alert('You clicked a marker');
    }
  }
});
