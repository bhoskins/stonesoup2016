import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    var height = Ember.$(window).height();
    var cssHeight = height + "px";
    var width = Ember.$(window).width();
    var cssWidth = width + "px";
    var borderWidth = "50px";

    if ( width < 768) {
      Ember.$('.container').css('height', cssHeight);
      Ember.$('.right-arrow-up').css('border-bottom', cssHeight);
      Ember.$('.left-arrow-down').css('border-top', cssHeight);

      Ember.$('.bottom-arrow-right').css('border-left', cssWidth);
      Ember.$('.top-arrow-left').css('border-right', cssWidth);

      Ember.$('.right-arrow-up').css('border-left', borderWidth);
      Ember.$('.left-arrow-down').css('border-right', borderWidth);
      Ember.$('.bottom-arrow-right').css('border-top', borderWidth);
      Ember.$('.top-arrow-left').css('border-bottom', borderWidth);




    }


    this.render('index');
  }
});
