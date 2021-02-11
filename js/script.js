$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn span').toggleClass("active");
    });

    $('.menu-items').click(function(){
        $('.menu').removeClass("active");
        $('.menu-btn span').toggleClass("active");
    });
});
