// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scroll event
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

  // * header logo event
  const navBg = document.querySelector(".header .nav-bg");
  const logoBox = document.querySelector(".header .logo-box");

  if (window.scrollY > 0) {
    navBg.style.opacity = "1";
    logoBox.classList.add("scroll");
  } else {
    navBg.style.opacity = "0";
    logoBox.classList.remove("scroll");
  }

  // * section-01 title event
  const titleOne = document.querySelector(".welcom .title");
  handleScroll(titleOne, 500); // 500px 여유를 두고 나타나게 설정

  // * fact show
  const oneFact = document.querySelector(".section-01 .fact-box");
  const twoFact = document.querySelector(".section-02 .fact-box");
  const fourFact = document.querySelector(".section-04 .fact-box");

  handleScroll(oneFact, 200);
  handleScroll(twoFact, 200);
  handleScroll(fourFact, 200);

});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> header menu mouseover
const product = document.querySelector(".header .menu-list a:first-child");
const menu = document.querySelector(".header .menu");
let hideTimeout;

// & menu show
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> header hambar click
const hambar = document.querySelector(".header .hambar");
const hamLineFirst = document.querySelector(".hambar .line:first-child");
const hamLineTwo = document.querySelector(".hambar .line:nth-child(2)");
const hamLineLast = document.querySelector(".hambar .line:last-child");
const logoBox = document.querySelector(".header .logo-box");
const logoImg = document.querySelector(".header .logo img");
const hamMenu = document.querySelector(".ham-m-menu");

hambar.addEventListener("click", () => {
  hamLineFirst.classList.toggle("on");
  hamLineTwo.classList.toggle("on");
  hamLineLast.classList.toggle("on");
  hamMenu.classList.toggle("on");

  if (window.scrollY === 0) {
    logoBox.classList.toggle("on");
    logoImg.classList.toggle("on");
    hamMenu.classList.add("line");
  } else {
    hamMenu.classList.remove("line");
  }

  if (logoBox.classList.contains("on")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> mobail sub menu show
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> mobail main img change
const mainImg = document.querySelector(".main");

window.onresize = function(event) {
  let innerWidth = window.innerWidth;
  if (innerWidth <= "1200") {
    mainImg.classList.remove("pc");
    mainImg.classList.add("mobile");
  } else {
    mainImg.classList.remove("mobile");
    mainImg.classList.add("pc");
  }
  // innerWidth <= "1200" ? mainImg.style.background = "url(../img/main_mo.webp) no-repeat center/cover" : mainImg.style.background = "url(../img/main.webp) no-repeat center/cover";
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> section-01 item slider

// 초기 DOM 요소
const funSlider = document.querySelector(".section-01 .item-slider");
const prevBtn = document.querySelector(".section-01 .prev");
const nextBtn = document.querySelector(".section-01 .next");

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

// 슬라이더 내용 추가
item.forEach((items) => {
  const li = document.createElement("li");
  li.innerHTML = createSlideItemHTML(items);
  funSlider.appendChild(li);
});

let currentIndex = 0;
const imagesPerView = 3; 

nextBtn.addEventListener("click", () => {
  const totalImages = funSlider.querySelectorAll("li").length; // li 개수
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
  const slideWidth = document.querySelector(".section-01 .item-box-i").clientWidth / imagesPerView;
  funSlider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// 화면 크기 변경 대응
window.addEventListener("resize", updateSlidePosition);


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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> section-03 spin slide box
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> section-02 logo slider
const slider = document.querySelector(".section-02 .slider ul");
const clone = slider.cloneNode(true);
document.querySelector(".section-02 .slider").appendChild(clone);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> section-04 logo slider
let roller = document.querySelector(".slider-list");
roller.id = "roller1";

let cloneF = roller.cloneNode(true);
cloneF.id = "roller2";
document.querySelector(".slider-wrap").appendChild(cloneF);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left = document.querySelector(".slider-list ul").offsetWidth + "px";

roller.classList.add("original");
cloneF.classList.add("clone");

