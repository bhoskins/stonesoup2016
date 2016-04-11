import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    padBody: function(){
      Ember.$('.navbar-toggle').on('click', function(){

        //Ember.$('.container-all').css('padding-top', '216px');
       });
    }
  }


});
