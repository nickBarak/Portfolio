const overviewEl = document.getElementById('overview'),
      pageEl = document.getElementById('page'),
      [overviewTitle, overviewContent, overviewButton] = overviewEl.children,
      openURL = (url, newTab=true)=> window.open(url, newTab ? '_blank' : '#'),
      loadGitHub = _=> openURL('https://github.com/nickBarak'),
      [swiperHelpEl] = document.getElementsByClassName('swiper-help'),
      [swiperPaginationEl] = document.getElementsByClassName('swiper-pagination'),
      [swiperArrowLeft, swiperArrowRight] = document.getElementsByClassName('swiper-button-white');

overviewTitle.innerHTML = 'Home';
overviewContent.innerHTML = overviews['Home'];
overviewButton.innerHTML = 'My GitHub';
overviewButton.addEventListener('click', loadGitHub);