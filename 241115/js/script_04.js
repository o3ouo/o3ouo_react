function contents () {
  
let item = document.querySelectorAll(".item")
console.log(item)

item.forEach( (items, index, array) => {
  console.log(array[index]);

  let text = items.querySelector(".text");

  array[index].addEventListener("mouseover", () => {
    text.style.display = "block";
  });

  array[index].addEventListener("mouseleave", () => {
    text.style.display = "none";
  });

});

}
contents();