import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', { path: '/about'});
  this.route('schedule', { path: '/schedule'});
  this.route('event', { path: '/schedule/:event_id'});
  this.route('map', { path: '/map'});
  this.route('tellers', { path: '/tellers'});
  this.route('teller', { path: '/tellers/:teller_id'});
  this.route('contact', { path: '/contact'});
});

export default Router;
