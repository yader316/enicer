$('.sliderSyncing__items-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.sliderSyncing__thumb-slider'
});
$('.sliderSyncing__thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sliderSyncing__items-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay:true
});