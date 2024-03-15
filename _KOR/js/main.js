$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 3450) {
            $(".global_quick").addClass("db_none");
        } else {
            $(".global_quick").removeClass("db_none");
        }
    });

});
