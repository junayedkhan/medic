
// navbar start

window.addEventListener('scroll', () => {
  var nav_section = document.querySelector('.nav_section')
  nav_section.classList.toggle('sticky', window.scrollY > 0)
})

// navbar end


//  baner slider start
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
//  baner slider end

// work section start

$(document).ready(function(){
  $(".flip_1").click(function(){
    $(".flip_1").toggleClass("flip_color_change")
    $(".arrow_flip_1").toggleClass("rotate_icon");
    $(".arrow_flip_1").css("transition", "0.5s ease-in-out");
    $(".panel_1").slideToggle("slow");
  });
  $(".flip_2").click(function(){
    $(".flip_2").toggleClass("flip_color_change")
    $(".arrow_flip_2").toggleClass("rotate_icon");
    $(".arrow_flip_2").css("transition", "0.5s ease-in-out");
    $(".panel_2").slideToggle("slow");
  });
  $(".flip_3").click(function(){
    $(".flip_3").toggleClass("flip_color_change")
    $(".arrow_flip_3").toggleClass("rotate_icon");
    $(".arrow_flip_3").css("transition", "0.5s ease-in-out");
    $(".panel_3").slideToggle("slow");
  });
  $(".flip_4").click(function(){
    $(".flip_4").toggleClass("flip_color_change")
    $(".arrow_flip_4").toggleClass("rotate_icon");
    $(".arrow_flip_4").css("transition", "0.5s ease-in-out");
    $(".panel_4").slideToggle("slow");
  });
});

$('.skill-per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});




$(document).ready(function(){
  const prev = $(".prev")
  const next = $(".next")
  $('.owl-department').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    navText: [
      prev,
      next
    ],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:3
      },
      992:{
        items:4
      },
      1200:{
        items:4
      }
  }
  });
});

$(document).ready(function(){
  $('.owl-testimonial').owlCarousel({
    loop:true,
    nav: false,
    dots: false,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      768:{
          items:2
      },
      992:{
        items:2
      },
      1200:{
        items:3
      }
  }
  });
});

$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
  buttons: [
    "zoom",
    "share",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ],
});