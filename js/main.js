const sendMsgBtn = document.querySelector('.sendMsgImg');
const sendMsgForm = document.querySelector('.sendMsgPopUp');
const sendMsgFormInner = document.querySelector('.sendMsg');

//bigSlider
$(document).ready(function(){
    $(".owl-carousel-1").owlCarousel({
        items: 1,
        nav: true,
        slideTransition: 'linear',
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 10000,
        // autoplayHoverPause: true,
        // autoplaySpeed: 650,
        smartSpeed: 650,
        checkVisibility: false, 
        navText : ["",""],
    });
});

//mainGallery
$(document).ready(function(){
    $(".owl-carousel-2").owlCarousel({
        items: 3,
        nav: true,
        slideTransition: 'linear',
        dots: false,
        margin: 20,
        // autoplay: true,
        // autoplayTimeout: 10000,
        // autoplayHoverPause: true,
        // autoplaySpeed: 650,
        smartSpeed: 650,
        checkVisibility: false, 
        navText : ["",""],
        // navContainerClass: 'owlNav',
    });
});

//bigSizeMainGallery
$('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    toolbar: false,
    idleTime: 0,
    btnTpl: {

        // Arrows
        arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div class="owl-prev"></div>' +
        "</button>",

        arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div class="owl-next"></div>' +
        "</button>",

    },
    baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="sectionInner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
        '</div>' +
        '</div>',
});

const popUp = evt => {
    console.log("asd");
    if(evt.target.classList.contains('sendMsgImg'))
    {
        sendMsgForm.classList.toggle('active');
    } else if (!sendMsgFormInner.contains(evt.target)){
        sendMsgForm.classList.remove('active');
    }
}

document.addEventListener('click', popUp);