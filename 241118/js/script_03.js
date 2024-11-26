document.addEventListener("DOMContentLoaded",()=>{
  let menu = document.querySelectorAll(".menu>li");
  let menubg = document.querySelector(".menubg");

  function gnb(){
    menu.forEach(menus=>{
      console.log(menus)
  
      let submenu = menus.querySelector(".submenu");
      let subli = submenu.querySelectorAll("li");
      menus.addEventListener("mouseenter",()=>{
        submenu.style.display="block"
        menubg.style.left="200px"
      });
      menus.addEventListener("mouseleave",()=>{
         submenu.style.display="none"
        menubg.style.left="0"
      });
    });
  }
  gnb();


  function banner(){
let btn = document.querySelector(".btn");
let ban = document.querySelector(".banner")

btn.addEventListener("click",()=>{
  btn.classList.toggle("open")

  if(btn.classList.contains("open")){
    btn.style.backgroundImage="url(./btn_close.png)";
    ban.style.right="0px";
  } else{
    btn.style.backgroundImage="url(./btn_open.png)";
    ban.style.right="-402px";
  }
})
  }
  banner();

  
 

  //////////////
});