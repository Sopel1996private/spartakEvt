const sendMsgBtn = document.querySelector('.sendMsgImg');
const sendMsgForm = document.querySelector('.sendMsgPopUp');
const sendMsgFormInner = document.querySelector('.sendMsg');

//bigSlider
// $(document).ready(function(){
//     $(".owl-carousel-1").owlCarousel({
//         items: 1,
//         nav: true,
//         slideTransition: 'linear',
//         dots: false,
//         // autoplay: true,
//         // autoplayTimeout: 10000,
//         // autoplayHoverPause: true,
//         // autoplaySpeed: 650,
//         smartSpeed: 650,
//         checkVisibility: false, 
//         navText : ["",""],
//     });
// });

// //mainGallery
// $(document).ready(function(){
//     $(".owl-carousel-2").owlCarousel({
//         items: 3,
//         nav: true,
//         slideTransition: 'linear',
//         dots: false,
//         margin: 20,
//         // autoplay: true,
//         // autoplayTimeout: 10000,
//         // autoplayHoverPause: true,
//         // autoplaySpeed: 650,
//         smartSpeed: 650,
//         checkVisibility: false, 
//         navText : ["",""],
//         // navContainerClass: 'owlNav',
//     });
// });

// //bigSizeMainGallery
// $('[data-fancybox="gallery"]').fancybox({
//     infobar: false,
//     toolbar: false,
//     idleTime: 0,
//     btnTpl: {

//         // Arrows
//         arrowLeft:
//         '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
//         '<div class="owl-prev"></div>' +
//         "</button>",

//         arrowRight:
//         '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
//         '<div class="owl-next"></div>' +
//         "</button>",

//     },
//     baseTpl:
//         '<div class="fancybox-container" role="dialog" tabindex="-1">' +
//         '<div class="fancybox-bg"></div>' +
//         '<div class="sectionInner">' +
//         '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
//         '<div class="fancybox-toolbar">{{buttons}}</div>' +
//         '<div class="fancybox-navigation">{{arrows}}</div>' +
//         '<div class="fancybox-stage"></div>' +
//         '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
//         '</div>' +
//         '</div>',
// });


//lightSlider
$(document).ready(function() {
    $("#lightSlider1").lightSlider(
        {item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        pager:false,
        slideEndAnimation: false,}
    ); 
  });
$(document).ready(function() {
    $("#lightgallery").lightSlider(
        {item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 25,
        pager:false,
        slideEndAnimation: false,}
    ); 
  });

    $(document).ready(function() {
        $("#lightgallery").lightGallery({
            loop: false,
            hideControlOnEnd: true,
            slideEndAnimatoin: false,
            download: false,
            counter: false,
            thumbnail: false,
            fullScreen: false,
            pager: false,
            zoom: false,
            actualSize: false,
            hash: false,
            share: false,
            rotate: false,
            autoplay: false,
            autoplayControls: false,
        }); 
    }); 

const popUp = evt => {
    if(evt.target.classList.contains('sendMsgImg'))
    {
        sendMsgForm.classList.toggle('active');
    } else if (!sendMsgFormInner.contains(evt.target)){
        sendMsgForm.classList.remove('active');
    }
}

document.addEventListener('click', popUp);