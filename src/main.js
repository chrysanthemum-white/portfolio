// Header에 페이지 아래로 스크롤시 border-bottom 클래스 적용
const header = document.querySelector('.header-box');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('header--border-bottom');
  } else {
    header.classList.remove('header--border-bottom');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const homeImgBox = document.querySelector('.home__img-box');
const homeTextBox = document.querySelector('.home__text-box');
const homeHeight = document.querySelector('#home').offsetHeight;

document.addEventListener('scroll', () => {
  homeImgBox.style.opacity = 1 - window.scrollY / homeHeight;
  homeTextBox.style.opacity = 1 - window.scrollY / homeHeight;
});
