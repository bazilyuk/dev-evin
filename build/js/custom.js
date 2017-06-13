;(function($){
    "use strict";
    $(document).ready(function () {
        /*
         * MatchHeight plugin initialization
         */
        $(".same-height").matchHeight();

        /*
         * Object fit images
         */
        objectFitImages(".object-position");

        /*
         * Bootstrap Stars rating plugin initialization
         */
        $(".rating-input").rating();

        /*
         * Bootstrap selectpicker initialization
         */
        $(".custom-select").selectpicker();

        /*
         * Datepicker initialization
         */
        $(".input-date").datepicker();
    });

})(jQuery);