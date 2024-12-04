// > scroll event
window.addEventListener("scroll", () => {
  // 요소가 화면에 나타나기 전에 동작시키는 공통 함수
  function handleScroll(element, offset = 200) {
    const elementTop = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementTop < viewportHeight - offset) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)"; // 등장 애니메이션
    } else {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)"; // 초기 위치 
    }
  }

  // * header logo event
  const navBg = document.querySelector(".header .nav-bg");
  const logo = document.querySelector(".header .logo");
  const logoBox = document.querySelector(".header .logo-box");

  if (window.scrollY > 0) {
    navBg.style.opacity = "1";
    logo.style.top = "0";
    logo.style.alignItems = "center";
    logoBox.style.transform = "scale(0.165)";
  } else {
    navBg.style.opacity = "0";
    logo.style.top = "-6px";
    logo.style.alignItems = "baseline";
    logoBox.style.transform = "scale(1)";
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


// > header menu mouseover
const product = document.querySelector(".header .menu-list a:first-child");
const menu = document.querySelector(".header .menu");
let hideTimeout;

// menu show
const showMenu = () => {
  clearTimeout(hideTimeout); // 기존 타이머 취소
  menu.style.opacity = "1";
  menu.style.pointerEvents = "auto";
};

// menu hide
const hideMenu = () => {
  hideTimeout = setTimeout(() => {
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  }, 300); 
};

// products, menu mouse event add
product.addEventListener("mouseover", showMenu);
menu.addEventListener("mouseover", showMenu);
product.addEventListener("mouseout", hideMenu);
menu.addEventListener("mouseout", hideMenu);


// > item 객체 배열 
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

// > item slider에 객체 배열로 만들어둔 item 넣기
let itemSlider = document.querySelector(".item-slider");

function slide(item) {

  let tem = item.map( items => {
    console.log(items);
    return `
      <li>
        <a href="#">
          <figure class="tem-img">
            <img src=${items.img} alt=${items.name}>
          </figure>
          <div class="tem-txt">
            <p class="tem-name">${items.name}</p>
            <p class="tem-info">${items.info}</p>
          </div>
        </a>
      </li>
    `
  });

  tem = tem.join("");
  console.log(tem);

  itemSlider.innerHTML = tem;
}

slide(item);

// section-01 item mouseover event
const funSlider = document.querySelector(".section-01 .item-slider"); 
const funBtnBox = document.querySelector(".section-01 .slide-btn");

let isMouseOverSlider = false; // 상태 플래그

funSlider.addEventListener("mouseover", (e) => {
  console.log("Mouseover on slider");
  console.log("Related Target:", e.relatedTarget);

  if (!funSlider.contains(e.relatedTarget) && !isMouseOverSlider) { // 내부에서 발생한 이벤트는 무시
    console.log("Mouse entered the slider area");
    isMouseOverSlider = true; // 플래그 설정
    funBtnBox.style.opacity = "1";
    funBtnBox.style.pointerEvents = "auto";
  }
});

funSlider.addEventListener("mouseout", (e) => {
  console.log("Mouseout from slider");
  console.log("Related Target:", e.relatedTarget);

  if (!funSlider.contains(e.relatedTarget)) {
    console.log("Mouse left the slider area");
    isMouseOverSlider = false; // 플래그 해제
    funBtnBox.style.opacity = "0";
    funBtnBox.style.pointerEvents = "none";
  }
});


// > section-02 logo slider
const slider = document.querySelector('.section-02 .slider ul');
const clone = slider.cloneNode(true);
document.querySelector(".section-02 .slider").appendChild(clone);


// > section-04 logo slider
let roller = document.querySelector('.slider-list');
roller.id = 'roller1';

let cloneF = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.slider-wrap').appendChild(cloneF);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.slider-list ul').offsetWidth + 'px';

roller.classList.add('original');
cloneF.classList.add('clone');
