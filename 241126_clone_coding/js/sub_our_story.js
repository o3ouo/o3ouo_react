
/********************************************************
                                            charater animation
********************************************************/
const topCharrick = document.querySelector(".main .c-img");
const bottomCharrick = document.querySelector(".section-03 .c-img");


// animation 함수
function charrickMove(charrick, speedFactor = 1, yAmplitude = 10, rotationFactor = 30) {
  const scrollY = window.scrollY;

  // 화면 너비
  const windowWidth = window.innerWidth;

  // 요소 위치와 크기 
  const rect = charrick.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // 요소가 보일 때의 조건을 검
  if (rect.top + rect.height > 0 && rect.top + windowHeight) {
    // x축 스크롤에 따라 움직이는 거리
    let moveX = (scrollY * speedFactor) % windowWidth;  

    console.log(`rect.top: ${rect.top}`);
    console.log(`rect.height: ${rect.height}`);

    // 이동 범위 제한 (화면 너비만큼)
    const maxMoveX = windowWidth;
    if (moveX > maxMoveX) {
      moveX = maxMoveX;
    }

    // Y축
    const moveY = Math.sin(scrollY * 0.05) * yAmplitude; // 주기와 진폭 조절

    // 회전 (물결과 반응하는 각도)
    const rotate = Math.sin(scrollY * 0.01) * rotationFactor;

    // 캐릭터에 이동값 적용
    charrick.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
    
    console.log(`moveX: ${moveX}`);
    console.log(`moveY: ${moveY}`);
    console.log(`rotate: ${rotate}`);
  }
}

/********************************************************
                                            fact show
********************************************************/
const fact = document.querySelector(".section-02 .fact-box");

// 요소가 화면에 나타나기 전에 동작시키는 공통 함수
function handleScroll(element, offset = 200) {
  const elementTop = element.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (elementTop < viewportHeight - offset) {
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }
}

// scroll event
window.addEventListener("scroll", () => {
  charrickMove(topCharrick);
  charrickMove(bottomCharrick, 0.6, 20, 40)
  
  // 높이가 줄어들었을 때
  let innerHeight = window.innerHeight;

  if (innerHeight <= "400") {
    handleScroll(fact);
  } else {
    handleScroll(fact, 500);
  }


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
