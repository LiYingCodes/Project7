
$(function () {
    $('#menu').on('click', function(){
        $('.dropdown').slideToggle('fast', function(){
            $('#menu').toggle();
            $('#close').toggle();
            $('.dropdown li').on('click', function() {
                $('.dropdown').slideToggle()
                $("#menu").toggle();
                $("#close").toggle();
            });
        });
    });

    $('#close').on('click', function () {
        $('.dropdown').slideToggle('fast', function () {
            $('#menu').toggle();
            $('#close').toggle();
        });
    });

    AOS.init({
        offset: 200,
        duration: 250,
        easing: "ease-in-sine",
        delay: 100,
        disable: window.innerWidth < 500
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery’s animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } 
    });
})
