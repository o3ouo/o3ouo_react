let btn = document.querySelectorAll(".right .img");
let img = document.querySelector(".left .img");

btn.forEach( (btns, i) => {
  console.log(btns)
  btn[i].addEventListener("click", () => {
    
    img.setAttribute('src', `./event_test/p${i}.jpg`);
  });
  
});