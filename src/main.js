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

// 아래로 스크롤 시 Arrow up 버튼을 서서히 나타나게 처리
const arrow = document.querySelector('#arrow');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫음 처리
const navbarMenuItems = document.querySelectorAll('.header__menu__item');

navbarMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
  });
});
