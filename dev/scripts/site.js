
$(function () {
    $('#menu').on('click', function(){
        $('.dropdown').slideToggle('fast', function(){
            $('#menu').toggle();
            $('#close').toggle();
        });
    })

    $('#close').on('click', function () {
        $('.dropdown').slideToggle('fast', function () {
            $('#menu').toggle();
            $('#close').toggle();
        });
    });
})
