$('.owl-carousel').owlCarousel({
    loop:true,
    rtl:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1,
            lazyLoad: true,
            autoHeight:false

        },
        600:{
            items:3,
            lazyLoad: true,
            autoHeight:false
        },
        1000:{
            items:6,
            lazyLoad: true,
            autoHeight:false
        }
    }
});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})