  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
  });

  const toTopElement = document.querySelector('.to_top');

 // toTopElement.addEventListener('click', function() {
 //   window.scrollTo({
 //     top: 0,
 //     behavior: 'smooth',
 //   })
 // })

 $('.to_top:first').click(function () {
   $('html').animate({ scrollTop: 0 }, 3000);
 })



 $('.dropdown_list:first').slideUp(0);
 $('.dropdown_trigger:first').on('click', function() {
  $('.dropdown_list:first').slideToggle();
 });