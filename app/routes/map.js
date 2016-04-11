import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.getJSON("assets/js/data.json").then(function(data) {
      return data.markers;
    });
  },
  setupController: function(controller) {
    controller.setProperties({
      lat: 34.74048,
      lng: -82.03491,
      zoom: 16
    });
  },
  customOptions: {
    fullscreenControl: true,
    disableAutoPan: true
    //mapTypeControlOptions: {
     // ControlPosition: LEFT_CENTER
    //}
  },
  actions: {
    markerClick: function() {
      alert('You clicked a marker');
    },
    mainVenueClick: function() {
      console.log('main venue clicked');
    },
    showMainVenue: function(){
      console.log('clicked Main Venue');
     Ember.$('.mainVenue-marker').trigger("click");

    }
    // foodZoom: function() {
    //   set(this.zoom, 14);
    // }
  }
});

//from Google - get users current position
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Location found.');
//     map.setCenter(pos);
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//   // Browser doesn't support Geolocation
//   handleLocationError(false, infoWindow, map.getCenter());
// }
