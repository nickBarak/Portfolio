function minimizeSwiper() {
    window.scrollTo(0, 0);
    blockSwiper.el.style.transform = window.innerWidth > 1200
        ? 'scale(.175)'
        : window.innerWidth > 1000
            ? 'scale(.245)'
            : window.innerWidth > 650
                ? 'scale(.325)'
                : window.innerWidth > 500
                    ? 'scale(.475)'
                    : 'scale(.3)';
    blockSwiper.el.style.top = `${window.innerHeight - blockSwiper.el.getBoundingClientRect().top}px`;
    blockSwiper.el.style.right = `${window.innerWidth - blockSwiper.el.getBoundingClientRect().right}px`;
    blockSwiper.el.style.position = 'absolute';
    setTimeout(_=> {
        blockSwiper.el.style.top = window.innerWidth > 750 ? '5rem' : window.innerWidth > 500 ? '4rem' : '2.75rem';
        blockSwiper.el.style.right = window.innerWidth > 750 ? '5rem' : window.innerWidth > 500 ? '2.75rem' : '2rem';
    }, 100);
    blockSwiper.el.style.cursor = 'pointer';
    blockSwiper.el.addEventListener('click', maximizeSwiper);
    blockSwiper.detachEvents();

    [swiperPaginationEl, swiperArrowLeft, swiperArrowRight].map(({style}) => { style.display = 'none' });

    swiperHelpEl.innerHTML = 'Click to return';
    swiperHelpEl.style.fontSize = window.innerWidth > 1200
    ? '6.5rem'
    : window.innerWidth > 1000
        ? '4.5rem'
        : window.innerWidth > 650
            ? '3.25rem'
            : '2.25rem';

    overviewEl.style.transform = 'translateX(-135%)';
    
    pageEl.style.visibility = 'visible';
    pageEl.style.top = window.innerWidth > 500 ? '8rem' : '5rem';
    
    setTimeout(_=> window.innerHeight >= 1100 && window.addEventListener('mousemove', scrollToCursor), 500);

    // if (document.getElementsByClassName('app-container')[0]) document.style.scrollBehavior = 'auto';
        // && window.addEventListener('wheel', updateAppImagesOnWheel);
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
    
    if (document.getElementsByClassName('app-container')[0]) {
        // document.style.scrollBehavior = 'smooth';
        hideAppDetails();
        // || window.removeEventListener('wheel', updateAppImagesOnWheel);
    }
    window.removeEventListener('mousemove', scrollToCursor);
}

function scrollToCursor(e) {
    const mousePos = [e.screenX, e.screenY - 180];
    window.scrollTo(...mousePos);
    // updateAppImagesOnScroll(...mousePos);
}

// function updateAppImagesOnWheel(e) { console.log('o') || updateAppImagesOnScroll(e.clientX, e.clientY); }

// function updateAppImagesOnScroll(x, y) {
//     console.log(x, y);
//     if (x && y) {
//         let elements = document.elementsFromPoint(x, y);
//         if (elements) {
//             let [appDiv] = elements.filter(({ className }) => className === 'app');
//             if (appDiv) {
//                 console.log('hooray');
//                 appDiv.children[0].style.borderColor = '#6677ff';
//                 appDiv.children[0].style.transform = 'scale(1.04)';
//             } else {
//                 console.log('nooo!');
//                 [...document.getElementsByClassName('app')].forEach(appDiv => {
//                     appDiv.children[0].style.borderColor = 'black';
//                     appDiv.children[0].style.transform = 'scale(1)';
//                 });
//             }
//         }
//     }
// }

function showAppDetails({ target: { parentElement: { dataset: { key: app } } } }) {
    app = Number(app);
    window.removeEventListener('mousemove', scrollToCursor);
    window.scrollTo(0, 0);

    [...document.getElementsByClassName('app-container')[0].children]
        .filter(({ dataset: { key } }) => key && Number(key) !== app)
        .forEach((child, i) => {
            child.style.transform = `translateX(${i ? '' : '-'}100vw)`;
        });
    
    let mobile = window.innerWidth < 550;
    if (app) {
        document.getElementsByClassName('app-container')[0].style.transform =
            `translateY(${
            app === 1
                ? mobile
                    ? '-2rem'
                    : '-4rem'
                : mobile
                    ? '-4rem'
                    : '-8rem'
            })`;
        document.getElementsByClassName('app-info-container')[0].style.transform = `translateY(${
            app === 1
                ? mobile
                    ? '-4rem'
                    : '-5rem'
                : mobile
                    ? '-1.5rem'
                    : 0
        })`;
    } else
        document.getElementsByClassName('app-info-container')[0].style.transform = `translateY(${mobile ? '-5.25rem' : '-10rem'})`;

    setTimeout(_=> {
        [...document.getElementsByClassName('app')].forEach((appDiv, i) => {
            if (i !== app) {
                appDiv.children[0].style.border = '0px solid transparent';
                appDiv.style.maxHeight = appDiv.children[0].style.height = appDiv.children[1].style.height = 0;
            }
        });
    }, 300);
    
    setTimeout(_=> {
        document.getElementsByClassName('app-container')[0].style.maxWidth = '80%';
        document.getElementsByClassName('app-info-container')[0].children[app].style.opacity = 1;
        document.getElementsByClassName('app-info-container')[0].children[app].style.pointerEvents = 'auto';

        let appDiv = [...document.getElementsByClassName('app-container')[0].children][app];
        [...appDiv.children].forEach(child => child.removeEventListener('click', showAppDetails) );
        appDiv.children[0].removeEventListener('mouseover', turnBorderBlue);
        appDiv.addEventListener('mouseover', lockAppImage);
        appDiv.children[0].style.cursor = 'auto';
        appDiv.children[1].innerHTML = 'Back to apps';
        appDiv.children[1].addEventListener('click', hideAppDetails);
    }, 350);
}

function hideAppDetails() {
    setTimeout(_=> window.innerHeight >= 1100 && window.addEventListener('mousemove', scrollToCursor), 500);
    
    document.getElementsByClassName('app-container')[0].style.transform =
        document.getElementsByClassName('app-info-container')[0].style.transform = `translateY(0)`;

    [...document.getElementsByClassName('app')].forEach(appDiv => {
        appDiv.children[0].style.border = '6px solid black';
        appDiv.style.maxHeight = appDiv.children[1].style.height = '100%';
        appDiv.children[0].style.height = window.innerWidth > 750 ? '30rem' : window.innerWidth > 550 ? '23.5rem' : '16rem';
    });

    [...document.getElementsByClassName('app-info-container')[0].children].slice(0, 3).forEach(child => {
        child.style.opacity = 0;
        child.style.pointerEvents = 'none';
    });

    setTimeout(_=> {
        [...document.getElementsByClassName('app-container')[0].children].slice(0, 3).forEach(child => {
            child.style.transform = `translateX(0)`;
        });
    }, 300);
    
    [...document.getElementsByClassName('app-container')[0].children].slice(0, 3).forEach(appDiv => {
        appDiv.removeEventListener('mouseover', lockAppImage);
    });
    setTimeout(_=> {
        document.getElementsByClassName('app-container')[0].style.maxWidth = '100%';

        [...document.getElementsByClassName('app-container')[0].children].slice(0, 3).forEach(appDiv => {
            appDiv.children[0].style.cursor = 'pointer';
            appDiv.children[1].innerHTML = appDiv.children[1].dataset.appName;
            appDiv.children[1].removeEventListener('click', hideAppDetails);
            appDiv.style.transform = '';
            appDiv.children[0].style.transform = '';
            appDiv.children[0].addEventListener('mouseover', turnBorderBlue);
            [...appDiv.children].forEach(child => child.addEventListener('click', showAppDetails) );
        });
    }, 350);
}

function lockAppImage({ target: { style } }) { style.transform = 'scale(1)' }
function turnBorderBlue(e) { e.target.style.borderColor = '#6677ff' }

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