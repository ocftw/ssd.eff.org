/**
 * @file
 * Configures Raven.js with the public DSN, options and context.
 */

(function () {

  "use strict";

  Raven.config(Drupal.settings.raven.dsn, Drupal.settings.raven.options).install();
  Raven.setUserContext(Drupal.settings.raven.user);

})();
;

/*
     FILE ARCHIVED ON 14:35:57 Nov 15, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:19:02 Jul 23, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 25.787 (3)
  esindex: 0.007
  captures_list: 50.947
  CDXLines.iter: 13.731 (3)
  PetaboxLoader3.datanode: 34.203 (5)
  exclusion.robots: 0.396
  exclusion.robots.policy: 0.378
  RedisCDXSource: 1.935
  PetaboxLoader3.resolve: 144.808 (2)
  load_resource: 186.012
*/