
/********************************************************
                                            scroll event
********************************************************/
let topCharrick = document.querySelector(".main .c-img img");
let bottomCharrick = document.querySelector(".section-03 .c-img img");

console.log(topCharrick.offsettop);

// animation 함수
function charrickMove(charrick, speedFactor = 0.8, yAmplitude = 10, rotationFactor = 30) {
  const scrollY = window.scrollY;

  // 화면 너비
  const windowWidth = window.innerWidth;

  // 요소 위치와 크기 
  const rect = charrick.getBoundingClientRect();

  // 요소가 보일 때의 조건을 검
  if (rect.top < window.innerHeight && rect.bottom > 0) {

  // x축 이동값 계산 (0px ~ 화면 너비까지)
  let moveX = (scrollY * speedFactor); // 스크롤에 따라 움직이는 거리

  // 이동 범위 제한 (화면 너비만큼)
  const maxMoveX = windowWidth;
  if (moveX > maxMoveX) {
    moveX = maxMoveX;
  }

  // // Y축 움직임 (물결 효과 - sin 함수 활용)
  const moveY = Math.sin(scrollY * 0.05) * yAmplitude; // 주기와 진폭 조절

  // 회전 (물결과 반응하는 각도)
  const rotate = Math.sin(scrollY * 0.01) * rotationFactor;

  // 캐릭터에 이동값 적용
  charrick.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
  }

}

// scroll event
window.addEventListener("scroll", () => {
  charrickMove(topCharrick, 0.8, 10, 30);
  charrickMove(bottomCharrick, -0.8, 10, 30)
});


/********************************************************
                                    header manu mouseover
********************************************************/
const product = document.querySelector(".header .menu-list a:first-child");
const menu = document.querySelector(".header .menu");
let hideTimeout;

// * menu show
const showMenu = () => {
  clearTimeout(hideTimeout); // 기존 타이머 취소
  menu.style.opacity = "1";
  menu.style.pointerEvents = "auto";
};

// * menu hide
const hideMenu = () => {
  hideTimeout = setTimeout(() => {
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  }, 300); 
};

// * products, menu mouse event add
product.addEventListener("mouseover", showMenu);
menu.addEventListener("mouseover", showMenu);
product.addEventListener("mouseout", hideMenu);
menu.addEventListener("mouseout", hideMenu);


/********************************************************
                                      header hambar click
********************************************************/
const hambar = document.querySelector(".header .hambar");
const hamLineFirst = document.querySelector(".hambar .line:first-child");
const hamLineTwo = document.querySelector(".hambar .line:nth-child(2)");
const hamLineLast = document.querySelector(".hambar .line:last-child");
const hamMenu = document.querySelector(".ham-m-menu");
const navBg = document.querySelector(".header .nav-bg");

hambar.addEventListener("click", () => {
  hamLineFirst.classList.toggle("on");
  hamLineTwo.classList.toggle("on");
  hamLineLast.classList.toggle("on");
  hamMenu.classList.toggle("on");
  navBg.classList.toggle("on");

  if (hamMenu.classList.contains("on")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});


/********************************************************
                                  mobile > sub menu show
********************************************************/
const products = document.querySelector(".header .ham-m-menu .m>li:first-child");
const productsBtn = document.querySelector(".header .ham-m-menu svg");
const productsSub = document.querySelector(".header .ham-m-menu .hidden-box");

let subToggle = true;

function showSub() {
  if (subToggle) {
    productsSub.style.height = "262px";
    productsBtn.style.transform = "rotate(180deg)";
    subToggle =! subToggle;
  } else {
    productsSub.style.height = "0px";
    productsBtn.style.transform = "rotate(0deg)";
    subToggle =! subToggle;
  }
}

products.addEventListener("click", showSub);
