jQuery(document).ready(function() {

  "use strict";

  buildify_tm_stickyy();

  jQuery(window).on('resize', function(e) {

    buildify_tm_stickyy();
  });



  jQuery(window).on('load', function(e) {
    buildify_tm_stickyy();
  });

});



function buildify_tm_stickyy() {

  "use strict";

  var el = jQuery('.sboxs');

  if (el.length) {
    el.each(function(index, element) {
      var child = jQuery(element).find('.sbox');
      child.css({
        height: 'auto'
      });
      var W = jQuery(window).width();
      if (W > 1200) {
        var elementHeights = child.map(function() {
          return jQuery(this).outerHeight();
        }).get();
        var maxHeight = Math.max.apply(null, elementHeights);
        child.css({
          height: maxHeight + 'px'
        });
      }
    });
  }

}