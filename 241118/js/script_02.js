let menu = document.querySelectorAll(".menu_m>li");

menu.forEach( (menus, index) => {

  menus.addEventListener("mouseover", () => {
  let subMenu = menus.querySelector(".menu_s");
  
  subMenu.style.opacity = "1";
  });

  menus.addEventListener("mouseout", () => {
    let subMenu = menus.querySelector(".menu_s");
    
    subMenu.style.opacity = "0";
    });

});

let btn = document.querySelector(".btn");
let aside = document.querySelector(".aside");

btn.addEventListener("click", () => {

  if (btn.classList.contains("open")) {
    
    aside.style.right = "0";
    btn.style.backgroundImage = "url(../classList/btn_close.png)";
    btn.classList.replace("open","close");

  } else {
    aside.style.right = "-402px";
    btn.style.backgroundImage = "url(../classList/btn_open.png)";
    btn.classList.replace("close","open");

    
  }
})