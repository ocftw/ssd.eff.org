(function ($) {

  'use strict';

  Drupal.behaviors.piwikNoscript = {
    attach: function (context, settings) {
      $('#piwik-noscript', context).once('piwik-noscript', function () {
        $(this).html(Drupal.theme('piwikNoscriptImage', settings.piwikNoscript.image));
      });
    }
  };

  Drupal.theme.prototype.piwikNoscriptImage = function (image) {
    // Define some parameters in the image src attribute.
    return image
      .replace('urlref=', 'urlref=' + encodeURIComponent(document.referrer))
      .replace('action_name=', 'action_name=' + encodeURIComponent(document.title));
  };

}(jQuery));
;

/*
     FILE ARCHIVED ON 14:36:07 Nov 15, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:18:48 Jul 23, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 292.749 (3)
  esindex: 0.006
  captures_list: 316.406
  CDXLines.iter: 13.915 (3)
  PetaboxLoader3.datanode: 133.553 (5)
  exclusion.robots: 0.394
  exclusion.robots.policy: 0.38
  RedisCDXSource: 3.336
  PetaboxLoader3.resolve: 201.811 (2)
  load_resource: 319.257
*/