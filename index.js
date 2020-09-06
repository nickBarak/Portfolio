function showAppDetails(app) {
    window.removeEventListener('mousemove', scrollToCursor);
    window.scrollTo(0, 0);
    var container = document.getElementsByClassName('app-container')[0];
    [...container.children].filter(({ dataset: { key } }) => key && Number(key) !== app).forEach((child, i) => {
        child.style.transform = `translateX(${i ? '' : '-'}100vw)`;
        
        if (app) {
            document.getElementsByClassName('app-container')[0].style.transform = `translateY(${app === 1 ? '-4rem' : '-8rem'}`;
            // appDiv.style.transform = 'scale(1) translateY(-5rem);'
        }
        
        setTimeout(_=> {
            [...document.getElementsByClassName('app')].forEach((appDiv, i) => {
                if (i !== app) {
                    // appDiv.children[0].style.borderColor = 'transparent';
                    // appDiv.children[0].style.borderWidth = '0px';
                    appDiv.children[0].style.border = '0px solid transparent';
                    appDiv.style.maxHeight = appDiv.children[0].style.height = appDiv.children[1].style.height = 0;
                }
                setTimeout(_=>
                    [...document.getElementsByClassName('app')].forEach((appDiv, i) => {
                        if (i !== app)
                            appDiv.style.display = 'none';
                }), 500);
        }, 500);
    });
    });
    
    
    // if (app) {
        // container.innerHTML = pageContent['Apps'][1][app] + container.innerHTML;
    // } else {
        // container.style.flexDirection = 
    setTimeout(_=> {
        container.style.maxWidth = '80%';
        // [...container.children].filter(({ dataset: { key } }) => Number(key) !== app).forEach((child, i, arr) => { if (i !== arr.length-1) child.style.display = 'none' });
        document.getElementsByClassName('app-info-container')[0].children[app].style.opacity = 1;
        document.getElementsByClassName('app-info-container')[0].children[app].style.pointerEvents = 'auto';
        // container.children[1].style.transform = 'translateY(0)';

        [...container.children[app].children].forEach(({ style }) => { style.cursor = 'auto' });
        container.children[app].addEventListener('mouseover', ({ target: { style } }) => {
            style.transform = 'scale(1)';
            style.borderColor = 'black';
        });
    }, 350);
}

function maximizeSwiper() {
    window.removeEventListener('mousemove', scrollToCursor);
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
    window.addEventListener('mousemove', scrollToCursor);
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


function scrollToCursor(e) {
    window.scrollTo(e.screenX, e.screenY - 350);
}

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