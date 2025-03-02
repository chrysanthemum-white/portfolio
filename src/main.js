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
