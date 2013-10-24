(function ($) {
    $.fn.typoify = function (options) {
        var opt = $.extend({
            prob: 0.5,
            threshold: 140
        }, options);
        var self = this;

        $.getJSON("typo.json", function (data) {
            $.fn.typoify.data = data;
        }).always(function () {
            return self.each(function () {
                var str = $(self).text(), new_str = "";
                for(i=0; i<str.length;i++){
                    if (Math.random() > opt.prob &&
                        typeof $.fn.typoify.data[str[i]] != 'undefined' &&
                        $.fn.typoify.data[str[i]].d <= opt.threshold) {
                        new_str += $.fn.typoify.data[str[i]].r;
                    } else {
                        new_str += str[i];
                    }
                }
                $(self).text(new_str);
            });
        });
    };
})(jQuery);
