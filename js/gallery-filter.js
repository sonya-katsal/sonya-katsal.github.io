$(document).ready(function () {
    $('.category').click(function () {
        // reset active class
        $('.category').removeClass("active");
        // add active class to selected
        $(this).addClass("active");
        // return needed to make function work
        return false;
    });

    $(function () {
        // create an empty variable
        var selectedClass = "";
        // call function when item is clicked
        $(".category").click(function () {
            // assigns class to selected item
            selectedClass = $(this).attr("data-rel");
            // fades out all portfolio items
            $(".gallery .item").fadeOut(100);
            // fades in selected category
            $(".gallery .item." + selectedClass).delay(100).fadeIn(100);
            setTimeout(function(){
                $(".gallery").masonry('layout');
                }, 350);
        });
    });

});
