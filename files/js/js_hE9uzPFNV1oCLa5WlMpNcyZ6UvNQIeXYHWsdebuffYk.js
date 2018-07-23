(function ($) {

Drupal.behaviors.mytube = {
  attach: function (context, settings) {
    $('.mytubetrigger', context).once('mytubetrigger').click(function(){
      $(this).hide();
      $(this).after(unescape($('.mytubeembedcode', this).html()));
      Drupal.attachBehaviors(this);

      // If API usage is enabled, instantiate the API.
      if ($(this).hasClass('mytube-js-api')) {
        Drupal.behaviors.mytube.InitiateYouTubeAPI();
      }

    });

    // Start the video when pressing the Enter button
    $('.mytubetrigger', context).keypress(function(e){
      if(e.which == 13){ // Enter key pressed
        $(this).click(); // Trigger search button click event
      }
    });

  }
};

/**
 * If API usage is enabled, initalize the player once the API is ready.
 */
Drupal.behaviors.mytube.InitiateYouTubeAPI = function(context) {
  if (typeof this.initialized === 'undefined') {
    // Load the iFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://web.archive.org/web/20171115141829/https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.initialized = true;
  }
};

})(jQuery);
;

/*
     FILE ARCHIVED ON 14:18:29 Nov 15, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:19:21 Jul 23, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 72.505 (3)
  esindex: 0.01
  captures_list: 93.974
  CDXLines.iter: 13.224 (3)
  PetaboxLoader3.datanode: 76.151 (5)
  exclusion.robots: 0.385
  exclusion.robots.policy: 0.366
  RedisCDXSource: 1.573
  PetaboxLoader3.resolve: 133.102 (2)
  load_resource: 177.869
*/