jQuery(function() {

    var _bh = jQuery('body, html'),
        _window = jQuery(window),
        _nav = jQuery('#nav');

        jQuery('a').click(function(e) {
            var t = jQuery(this), h = t.attr('href'), article;

            if (h.charAt(0) == '#' && h.length > 1 && (article = jQuery('article#' + h.substring(1))).length > 0)
            {
                t.addClass('active').siblings().removeClass('active');
                var pos = Math.max(article.parent().offset().top - _nav.height() + 15, 0);
                e.preventDefault();
                _bh.animate({ scrollTop: pos }, 'slow', 'swing');
            }
        });

});