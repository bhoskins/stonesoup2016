import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('events', {path: '/events'});
  this.route('event', {path: '/events/:event_id'});
  this.route('tellers', {path: '/tellers'});
  this.route('map', {path: '/map'});
  this.route('contact', {path: '/contact'});
});

export default Router;
