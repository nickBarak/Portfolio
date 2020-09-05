function maximizeSwiper() {
    blockSwiper.el.style.transform = 'scale(1)';
    // blockSwiper.el.style.width = '100%';
    blockSwiper.el.style.cursor = 'grab';
    setTimeout(_=> {
        blockSwiper.el.style.position = 'relative';       
        setTimeout(_=> {
            blockSwiper.el.style.top = 0;
            blockSwiper.el.style.right = 0;
        }, 25);
    }, 125);
    blockSwiper.el.removeEventListener('click', maximizeSwiper);
    blockSwiper.attachEvents();
    
    [swiperPaginationEl, swiperArrowLeft, swiperArrowRight].map(({style}) => { style.display = 'block' });

    swiperHelpEl.innerHTML = 'Spin the block to navigate';
    swiperHelpEl.style.fontSize = '1.3rem';

    overviewEl.style.transform = 'translateX(0)';

    pageEl.style.top = '150%';
    setTimeout(_=> { pageEl.style.visibility = 'hidden' }, 300);
}

function minimizeSwiper() {
    window.scrollTo(0, 0);
    blockSwiper.el.style.transform = 'scale(.175)';
    blockSwiper.el.style.top = `${window.innerHeight - blockSwiper.el.getBoundingClientRect().top}px`;
    blockSwiper.el.style.right = `${window.innerWidth - blockSwiper.el.getBoundingClientRect().right}px`;
    blockSwiper.el.style.position = 'absolute';
    setTimeout(_=> {
        blockSwiper.el.style.top = '5rem';
        blockSwiper.el.style.right = '5rem';
    }, 100);
    blockSwiper.el.style.cursor = 'pointer';
    blockSwiper.el.addEventListener('click', maximizeSwiper);
    blockSwiper.detachEvents();

    [swiperPaginationEl, swiperArrowLeft, swiperArrowRight].map(({style}) => { style.display = 'none' });

    swiperHelpEl.innerHTML = 'Click to return';
    swiperHelpEl.style.fontSize = '5rem';

    overviewEl.style.transform = 'translateX(-135%)';

    pageEl.style.visibility = 'visible';
    pageEl.style.top = '10rem';
}


const overviewEl = document.getElementById('overview'),
      pageEl = document.getElementById('page'),
      [overviewTitle, overviewContent, overviewButton] = overviewEl.children,
      openURL = (url, newTab=true)=> window.open(url, newTab ? '_blank' : '#'),
      loadGitHub = _=> openURL('https://github.com/nickBarak'),
      [swiperHelpEl] = document.getElementsByClassName('swiper-help'),
      [swiperPaginationEl] = document.getElementsByClassName('swiper-pagination'),
      [swiperArrowLeft, swiperArrowRight] = document.getElementsByClassName('swiper-button-white');

overviewTitle.innerHTML = 'Home';
overviewButton.addEventListener('click', loadGitHub);


let blockOptions = {
    init: false,
    loop: true,
    speed:1000,
    slidesPerView: 2,
    centeredSlides : true,
    effect: 'cube',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     1023: {
    //     slidesPerView: 1,
    //     spaceBetween: 0
    //     }
    // },
    // Events
    on: {
        imagesReady: function(){
        this.el.classList.remove('loading');
        }
    }
};
let blockSwiper = new Swiper('.block-swiper', blockOptions);
blockSwiper.init();