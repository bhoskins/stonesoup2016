import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about');
  this.route('schedule');
  this.route('event', { path: '/schedule/:event_id'});
  this.route('map');
  this.route('tellers');
  this.route('teller', { path: '/tellers/:teller_id'});
  this.route('contact');
});

export default Router;
