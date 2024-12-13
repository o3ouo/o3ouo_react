
/********************************************************
                                            scroll event
********************************************************/
// window.addEventListener("scroll", () => {

//   // * header logo 
//   const navBg = document.querySelector(".header .nav-bg");
//   const logoBox = document.querySelector(".header .logo-box");

//   if (window.scrollY > 0) {
//     navBg.style.opacity = "1";
//     logoBox.classList.add("scroll");
//   } else {
//     navBg.style.opacity = "0";
//     logoBox.classList.remove("scroll");
//   }

// });


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
