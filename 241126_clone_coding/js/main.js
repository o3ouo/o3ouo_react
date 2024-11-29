let navBg = document.querySelector(".header .nav-bg");
let logo = document.querySelector(".header .logo");
let logoBox = document.querySelector(".header .logo-box");

window.addEventListener("scroll", function () {

  const isScrolled = window.scrollY > 0;

  navBg.classList.toggle("scrolled", isScrolled);
  logo.classList.toggle("scrolled", isScrolled);
  logoBox.classList.toggle("scrolled", isScrolled);

  // if (this.window.scrollY > 0) {
  //   navBg.style.opacity = "1";

  //   logo.style.top = "0";
  //   logo.style.alignItems = "center";
    
  //   logoBox.style.transform = "scale(0.2)";
  // } else {
  //   navBg.style.opacity = "0";

  //   logo.style.top = "-6px";
  //   logo.style.alignItems = "baseline";

  //   logoBox.style.transform = "scale(1)";
  // };

});

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