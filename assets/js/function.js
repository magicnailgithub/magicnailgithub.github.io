$(document).ready(function(){
  //startHome();
  headerNav();
  startHeader();
});

function startHeader(){
  var arr = ['.nav-home','.nav-service','.nav-about','.nav-contact'];
  $.each(arr, function(i){
    setTimeout(function(){
      $(arr[i]).addClass('show')
    },i*200)
  })
}

function headerNav(){
  $('.find-nav-bar').hover(function(){
    $('.find-nav-label, .find-nav-content').addClass('is-open');
  }, function(){
    $('.find-nav-label, .find-nav-content').removeClass('is-open');
  });

  $('.nav').on('click', function(){
    if ($(window).width() >= 840) {
      //$(this).addClass('is-clicked');
      $(this).parent().siblings().children('a').removeClass('is-clicked');
      //smooth scrolling
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - (($(window).height() - $($.attr(this, 'href')).height()) / 2)
      }, 500);
    } else {
      $('.mobile-nav-toggle,.mobile-logo,.mobile-nav-container,.header-position').toggleClass('is-open');
      //smooth scrolling
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
      }, 500);
    }
    return false;
  });

  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav-toggle,.mobile-logo,.mobile-nav-container,.header-position').toggleClass('is-open');
  });
}


$(window).scroll(function(){
  //aboutScroll();
  startAbout();
  startService();
  startContact();
  if($(window).width() < 840) {
    startLogo();
  };
});

function startLogo(){
  var wScroll = $(window).scrollTop();
  if(wScroll > $(window).height()/2){
    $('.mobile-logo').addClass('is-passed');
  } else {
    $('.mobile-logo').removeClass('is-passed');
  }
}

function startAbout(){
  var wScroll = $(window).scrollTop();
  var arr = ['.about-image-container', '.content-a']
  //var arr = ['.title', '.content']

  //make these things run one after another in 0.2s
  if($('section.about').offset().top < wScroll + $(window).height()/2) {
    $.each(arr, function(i){
      setTimeout(function(){
        $(arr[i]).addClass('is-started');
      },i*200);
    });
    setTimeout(function(){
      $('.about-image').addClass('slide-in');
    },300)

  }
}

function startService(){
  var wScroll = $(window).scrollTop();
  var arr = ['.service-image-container', '.content-s'];
  var arr2 = [['.mood-txt','.mood-img'],['.acrylic-txt','.acrylic-img'],['.design-txt','.design-img'],['.french-txt','.french-img']];

  //make these things run one after another in 0.2s
  if($('section.service').offset().top < wScroll + $(window).height()/2) {
    $.each(arr, function(i){
      setTimeout(function(){
        $(arr[i]).addClass('is-started');
      },i*200);
    });

    $.each(arr2, function(i){
      setTimeout(function(){
        $(arr2[i][0]).addClass('show');
        $(arr2[i][1]).addClass('show');
      },i*200 + 200)
    });
  }
}

function startContact(){
  var wScroll = $(window).scrollTop();
  var arr = ['.social-description', '.content-c']
  var arr2 = ['.facebook', '.google', '.yelp']

  //make these things run one after another in 0.2s
  if($('section.contact').offset().top < wScroll + $(window).height()/2) {
    $.each(arr, function(i){
      setTimeout(function(){
        $(arr[i]).addClass('is-started');
      },i*200);
    });
    $.each(arr2, function(i){
      setTimeout(function(){
        $(arr2[i]).addClass('pop');
      },i*150);
    });

  }
}
