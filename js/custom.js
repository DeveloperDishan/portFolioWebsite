


$(window).on('scroll',function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 20){
      $(".navbar").addClass("sticky")
    }else{
      $(".navbar").removeClass("sticky")
    }
   
    // if(this.scroll > 500){
    //   $(".scroll-up-btn").addClass("show")
    // }else{
    //   $(".scroll-up-btn").removeClass("show")
    // }
   });
    // slide up script

    // type script animation

    var typed = new Typed(".dishan", {
      strings: [ "Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })
    var typed = new Typed(".dishan2", {
      strings: [ "Freelancer", "Designer", "Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0})
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false,
        },
        600:{
          items: 2,
          nav: false,
        },
        1000:{
          items: 3,
          nav: false,
        }
      }
    });