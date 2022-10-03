$(document).ready(function(){


    //AOS
    AOS.init();

    // 햄버거버튼 클릭
    $('header .hamberger').click(function(){
      $('header .hamberger span').toggleClass('active');
      
      $('.hbg-box').toggleClass('active');
      
  });
    
    var swiper = new Swiper(".mySwiper1", {

        // allowTouchMove : false,
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        //   },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
     });



    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 100,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        
        375: {
          slidesPerView: 1,  //브라우저가 375보다 클 때
          // spaceBetween: 20,
          slidesPerGroup: 1,
        },
        760: {
          slidesPerView: 3,  //브라우저가 760보다 클 때
          spaceBetween: 20,
          slidesPerGroup: 3,
        },
        960: {
          slidesPerView: 4,  //브라우저가 960보다 클 때
          spaceBetween: 20,
          slidesPerGroup: 4,
        },
        1200: {
          slidesPerView: 6,  //브라우저가 1200보다 클 때
          spaceBetween: 20,
          slidesPerGroup: 6,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
    });






     $('.slide-view .btn-right').click(function(){
        $('.slide-view .slide-wrap').animate({
            // 애니메이트는 트렌지션 안걸어도 자연스럽게 넘어감
          left: -362
        },function(){
            $('.slide-view .slide-wrap').css({
                left: 0
            }).find('.img-box').first().appendTo('.slide-view .slide-wrap');
            // find 를 사용하는 이유는 하위요소의 이미지를 찾는것
            
        });
    });

    $('.header-bottom .header-bottom-txt-box li').mouseenter(function(){
      const tab = $(this).attr('data-alt');
      $('.sub-menu-box .sub-menu').removeClass('active');
      $(`#${tab}`).addClass('active');

      // 서브메뉴박스 보이게 처리
      $('.sub-menu-box').addClass('active');

      // 로고메뉴 li 들 마우스 엔터&리브 색상 변경
      $('.header-bottom li a').mouseenter(function(){
          $(this).addClass('active');
      });
      $('.header-bottom li a').mouseleave(function(){
          $(this).removeClass('active');
      });
      
  });
  
  // 마우스 벗어났을 때 서브메뉴박스 안보이게 처리
  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');

    
});

    //상단이동버튼
    const btn = $('.top-btn');
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
          btn.fadeIn();
      }else{
          btn.fadeOut();
      }
    });

    btn.on('click',function(e){
      // $('.top-btn').click(function()); 이랑 위에랑 똑같음 다르게 작성해본것
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      },600);
    });

});