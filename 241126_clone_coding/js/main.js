
// scrll event
window.addEventListener("scroll", function () {

  // header logo event
  let navBg = document.querySelector(".header .nav-bg");
  let logo = document.querySelector(".header .logo");
  let logoBox = document.querySelector(".header .logo-box");

  if (this.window.scrollY > 0) {
    navBg.style.opacity = "1";

    logo.style.top = "0";
    logo.style.alignItems = "center";
    
    logoBox.style.transform = "scale(0.165)";
  } else {
    navBg.style.opacity = "0";

    logo.style.top = "-6px";
    logo.style.alignItems = "baseline";

    logoBox.style.transform = "scale(1)";
  };

  // section-01 title event
  let titleOne = document.querySelector(".welcom .title");

  if (window.scrollY >= titleOne.offsetTop + 500) {
    titleOne.style.opacity = "1";
    console.log("ㄱㄱ");
  } else {
    titleOne.style.opacity = "0";
    console.log("ㄴㄴ");
  };

});


// section-01 item mouseover event




// item 객체 배열 
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

// item slider에 객체 배열로 만들어둔 item 넣기
let itemSlider = document.querySelector(".item-slider");
let slideBtn = document.querySelectorAll(".slide-btn .arrow");

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