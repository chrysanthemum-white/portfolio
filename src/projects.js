'use strict';
//  Projects에서 버튼을 선택시 화면 재구성
const blueBtn = document.querySelector('.bg-blue');
const whiteBtn = document.querySelector('.bg-white');
const projectsListBox = document.querySelector('.projects__list-box');
const projectsIconBox = document.querySelector('.projects__icon-box');

blueBtn.addEventListener('click', () => {
  projectsListBox.classList.remove('projects__display-none');
  projectsIconBox.classList.add('projects__display-none');
  blueBtn.style.backgroundColor = 'var(--color-accent)';
  blueBtn.style.color = 'white';
  whiteBtn.style.backgroundColor = 'var(--color-secondary)';
  whiteBtn.style.color = 'black';
});

whiteBtn.addEventListener('click', () => {
  projectsListBox.classList.add('projects__display-none');
  projectsIconBox.classList.remove('projects__display-none');
  whiteBtn.style.backgroundColor = 'var(--color-accent)';
  whiteBtn.style.color = 'white';
  blueBtn.style.backgroundColor = 'var(--color-secondary)';
  blueBtn.style.color = 'black';
});

//  에너지관리시스템 화살표 좌우측 선택시 이미지 전환
const projectList = document.querySelectorAll('.projects__main-list');
const arrowRight = document.querySelector('.fa-arrow-right');
const arrowLeft = document.querySelector('.fa-arrow-left');

let translateYValue = 0;

arrowLeft.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    if (translateYValue === 0) {
      return;
    } else {
      translateYValue += 900;

      projectList.forEach((project) => {
        project.style.transform = `translateX(${translateYValue}px)`;
      });
    }
  } else {
    if (translateYValue === 0) {
      return;
    } else {
      translateYValue += 675;

      projectList.forEach((project) => {
        project.style.transform = `translateX(${translateYValue}px)`;
      });
    }
  }
});

arrowRight.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    if (translateYValue === -9000) {
      return;
    } else {
      translateYValue -= 900;

      projectList.forEach((project) => {
        project.style.transform = `translateX(${translateYValue}px)`;
      });
    }
  } else {
    if (translateYValue === -6750) {
      return;
    } else {
      translateYValue -= 675;

      projectList.forEach((project) => {
        project.style.transform = `translateX(${translateYValue}px)`;
      });
    }
  }
});
