/********************************************************
                                            scroll event
********************************************************/
window.addEventListener("scroll", () => {
  
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

  // * header logo 
  const navBg = document.querySelector(".header .nav-bg");
  const logoBox = document.querySelector(".header .logo-box");

  if (window.scrollY > 0) {
    navBg.style.opacity = "1";
    logoBox.classList.add("scroll");
  } else {
    navBg.style.opacity = "0";
    logoBox.classList.remove("scroll");
  }

  const titleOne = document.querySelector(".welcom .title");
  const oneFact = document.querySelector(".section-01 .fact-box");
  const twoFact = document.querySelector(".section-02 .fact-box");
  const fourFact = document.querySelector(".section-04 .fact-box");

  // * 높이가 줄어들었을 때
let innerHeight = window.innerHeight;

if (innerHeight <= "400") {
  handleScroll(titleOne);
  handleScroll(oneFact, 100);
  handleScroll(twoFact, 100);
  handleScroll(fourFact, 100);
} else {
  handleScroll(titleOne, 500); // 500px 여유를 두고 나타나게 설정
  handleScroll(oneFact, 200);
  handleScroll(twoFact, 200);
  handleScroll(fourFact, 200);
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
const logoBox = document.querySelector(".header .logo-box");
const logoImg = document.querySelector(".header .logo img");
const hamMenu = document.querySelector(".ham-m-menu");
const navBg = document.querySelector(".header .nav-bg");

hambar.addEventListener("click", () => {
  hamLineFirst.classList.toggle("on");
  hamLineTwo.classList.toggle("on");
  hamLineLast.classList.toggle("on");
  hamMenu.classList.toggle("on");
  navBg.classList.toggle("on");

  if (window.scrollY === 0) {
    logoBox.classList.toggle("on");
    logoImg.classList.toggle("on");
    hamMenu.classList.add("line");
  } else {
    hamMenu.classList.remove("line");
  }

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


/********************************************************
                                mobile > main img change
********************************************************/
const mainImg = document.querySelector(".main");

window.onresize = function(event) {
  let innerWidth = window.innerWidth;
  if (innerWidth <= "767") {
    mainImg.classList.remove("pc");
    mainImg.classList.add("mobile");
  } else {
    mainImg.classList.remove("mobile");
    mainImg.classList.add("pc");
  }
};


/********************************************************
                                  section-01 item slide
********************************************************/
// 아이템 데이터 배열
let item = [
  {
    id: 1,
    img: "./img/section01_01.jpg",
    name: "KOREAN BBQ",
    info: "Grass-Fed Beef"
  },
  {
    id: 2,
    img: "./img/section01_02.jpg",
    name: "LAO CURRY",
    info: "Grass-Fed Beef"
  },
  { id: 3,
    img: "./img/section01_03.jpg",
    name: "KALE CHIMICHURRI",
    info: "Chicken Sausage"
  },
  { id: 4,
    img: "./img/section01_04.jpg",
    name: "SMOKED CAULI BRAT",
    info: "Chicken Sausage"
  },
  { id: 5,
    img: "./img/section01_05.webp",
    name: "MAPLE APPLE",
    info: "Chicken Sausage"
  },
];

// 슬라이드 HTML 생성 함수
function createSlideItemHTML(item) {
  return `
    <a href="#">
      <figure class="tem-img">
        <img src="${item.img}" alt="${item.name}">
      </figure>
      <div class="tem-txt">
        <p class="tem-name">${item.name}</p>
        <p class="tem-info">${item.info}</p>
      </div>
    </a>`;
}

const funSliderBox = document.querySelector(".section-01 .item-box-i");
const funSlider = document.querySelector(".section-01 .item-slider");
let funList = document.querySelectorAll(".section-01 .item-slider li");
const prevBtn = document.querySelector(".section-01 .prev");
const nextBtn = document.querySelector(".section-01 .next");

// 슬라이더 내용 추가
item.forEach((items) => {
  const li = document.createElement("li");
  li.innerHTML = createSlideItemHTML(items);
  funSlider.appendChild(li);
});

// // slide list
let funSlideList = document.querySelectorAll(".section-01 .item-slider li");

console.log(funSlideList)

// 초기값
let currentIndex = 0;
let imagesPerView;

if (window.innerWidth <= "1023") {
  imagesPerView = 1;
} else {
  imagesPerView = 3;
};

nextBtn.addEventListener("click", () => {
  const totalImages = funSlideList.length; // li 개수
  if (currentIndex < totalImages - imagesPerView) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

function updateSlidePosition() {
  const slideWidth = funSliderBox.clientWidth / imagesPerView;
  funSlider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  console.log(imagesPerView)
  console.log(currentIndex);
  console.log(slideWidth);
  console.log((-currentIndex * slideWidth));
}

// 화면 크기 변경 대응
window.addEventListener("resize", updateSlidePosition);


/********************************************************
                                  section-02 logo slider
********************************************************/
const slider = document.querySelector(".section-02 .slider ul");
const clone = slider.cloneNode(true);
document.querySelector(".section-02 .slider").appendChild(clone);


/********************************************************
                                section-03 recipes slide
********************************************************/
const recipeSlider = document.querySelector(".section-03 .recipes .box-wrap");
const recipeBtnL = document.querySelector(".section-03 .recipes .l");
const recipeBtnR = document.querySelector(".section-03 .recipes .r");

let recipeIndex = 0;
const recipeView = 1;
const recipeTotal = document.querySelectorAll(".section-03 .recipes .box").length;

function recipeUpdate() {
  const recipeWidth = recipeSlider.parentElement.clientWidth / recipeView;
  recipeSlider.style.transform = `translateX(${-recipeIndex * recipeWidth}px)`;
  recipeSlider.style.transition = "transform 0.5s ease-in-out";
}

function moveSlider(direction) {
  if (direction === "right") {
    recipeIndex = (recipeIndex + 1) % recipeTotal;
  } else if (direction === "left") {
    recipeIndex = (recipeIndex - 1 + recipeTotal) % recipeTotal;
  }
  recipeUpdate();
}

if (window.innerWidth <= "767") {
  recipeBtnR.addEventListener("click", () => {moveSlider("right")});
  recipeBtnL.addEventListener("click", () => {moveSlider("left")});

  recipeUpdate();
  window.addEventListener("resize", recipeUpdate);
};


/********************************************************
                                    section-03 spin slide
********************************************************/
const conInner = document.querySelector(".section-03 .con-inner");
const spinPrev = document.querySelector(".section-03 .prev");
const spinNext = document.querySelector(".section-03 .next");

let spinIndex = 0;
const spinView = 1;
const spinTotal = document.querySelectorAll(".section-03 .content-box").length;

function update() {
  const spinWidth = conInner.parentElement.clientWidth / spinView; // 한 슬라이드의 너비
  conInner.style.transform = `translateX(${-spinIndex * spinWidth}px)`;
  conInner.style.transition = "transform 0.5s ease-in-out";
}

function moveSlide(direction) {
  if (direction === "next") {
    spinIndex = (spinIndex + 1) % spinTotal;
  } else if (direction === "prev") {
    spinIndex = (spinIndex - 1 + spinTotal) % spinTotal;
  }
  update();
}

spinNext.addEventListener("click", () => {moveSlide("next")});
spinPrev.addEventListener("click", () => {moveSlide("prev")});

update();
window.addEventListener("resize", update);


/********************************************************
                                  section-04 logo slider
********************************************************/
let roller = document.querySelector(".slider-list");
roller.id = "roller1";

let cloneF = roller.cloneNode(true);
cloneF.id = "roller2";
document.querySelector(".slider-wrap").appendChild(cloneF);

roller.classList.add("original");
cloneF.classList.add("clone");

