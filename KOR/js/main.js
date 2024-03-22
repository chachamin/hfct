$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1300) {
            $(".global_quick").addClass("db_none");
        } else {
            $(".global_quick").removeClass("db_none");
        }
    });

});
