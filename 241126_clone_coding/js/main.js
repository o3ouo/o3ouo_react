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


// section-01 fun slide box
const funSlider = document.querySelector(".section-01 .item-slider"); 
const images = document.querySelectorAll(".section-01 .item-slider img");
const prevBtn = document.querySelector(".section-01 .prev");
const nextBtn = document.querySelector(".section-01 .next");

let currentIndex = 0;
const totalImages = images.length;
const imagesPerView = 3; 

nextBtn.addEventListener("click", () => {
  // 오른쪽 끝에 도달하면 멈춤
  if (currentIndex <  totalImages - imagesPerView) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevBtn.addEventListener("click", () => {
  // 왼쪽 끝에 도달하면 멈춤
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

function updateSlidePosition() { 
  const slideWidth = funSlider.clientWidth / imagesPerView; // 한 이미지의 폭
  funSlider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// resize 
window.addEventListener("resize", updateSlidePosition);







// > section-02 logo slider
const slider = document.querySelector(".section-02 .slider ul");
const clone = slider.cloneNode(true);
document.querySelector(".section-02 .slider").appendChild(clone);


// > section-04 logo slider
let roller = document.querySelector(".slider-list");
roller.id = "roller1";

let cloneF = roller.cloneNode(true);
clone.id = "roller2";
document.querySelector(".slider-wrap").appendChild(cloneF);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left = document.querySelector(".slider-list ul").offsetWidth + "px";

roller.classList.add("original");
cloneF.classList.add("clone");








// section-03 spin slide box

// const spinBtnLeft = document.querySelector(".section-03 .spin .btn-wrap .arrow:first-child");
// const spinBtnRight = document.querySelector(".section-03 .spin .btn-wrap .arrow:last-child");
// const spinBoxWrap = document.querySelector(".section-03 .spin .contents .box-wrap"); // 부모 컨테이너
// const spinBoxes = document.querySelectorAll(".section-03 .spin .box");

// let currentIndex = 0; // 현재 인덱스
// let slideWidth = spinBoxes[0].offsetWidth; // 슬라이드 너비
// const totalSlides = spinBoxes.length; // 슬라이드 개수

// // 슬라이드 복제
// const firstClone = spinBoxes[0].cloneNode(true);
// const lastClone = spinBoxes[totalSlides - 1].cloneNode(true);
// spinBoxWrap.appendChild(firstClone); // 마지막 뒤에 첫 번째 추가
// spinBoxWrap.insertBefore(lastClone, spinBoxes[0]); // 첫 번째 앞에 마지막 추가

// // 초기 위치 설정 (복제된 마지막 슬라이드로 이동)
// spinBoxWrap.style.transform = `translateX(-${slideWidth}px)`;

// // 버튼 클릭 이벤트 핸들러
// function moveSlide(direction) {
//   // 방향에 따른 인덱스 업데이트
//   if (direction === "left") {
//     currentIndex--;
//   } else {
//     currentIndex++;
//   }

//   // 슬라이드 이동
//   spinBoxWrap.style.transition = "transform 0.5s ease-in-out";
//   spinBoxWrap.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;

//   // 무한 루프 (애니메이션이 끝난 후 이벤트 발생)
//   spinBoxWrap.addEventListener("transitionend", () => {
//     spinBoxWrap.style.transition = "none";
//     if (currentIndex === -1) {
//       currentIndex = totalSlides - 1; // 마지막 슬라이드로 이동
//       spinBoxWrap.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
//     }
//     if (currentIndex === totalSlides) {
//       currentIndex = 0; // 첫 번째 슬라이드로 이동
//       spinBoxWrap.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
//     }
//   });
// }

// // 버튼 이벤트 리스너 추가
// spinBtnLeft.addEventListener("click", () => moveSlide("left"));
// spinBtnRight.addEventListener("click", () => moveSlide("right"));

// window.addEventListener("resize", () => {
//   slideWidth = spinBoxes[0].offsetWidth; // 새 슬라이드 너비 계산
//   spinBoxWrap.style.transition = "none"; // 애니메이션 제거
//   spinBoxWrap.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
// });


