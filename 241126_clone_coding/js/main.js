let item = [
  {
    id: 1,
    img: "./img/sction01_01.jpg",
    name: "KOREAN BBQ",
    info: "Grass-Fed Beef"
  },
  {
    id: 2,
    img: "./img/sction01_01.jpg",
    name: "LAO CURRY",
    info: "Grass-Fed Beef"
  },
  { id: 3,
    img: "./img/sction01_01.jpg",
    name: "KALE CHIMICHURRI",
    info: "Chicken Sausage"
  },
  { id: 4,
    img: "./img/sction01_01.jpg",
    name: "SMOKED CAULI BRAT",
    info: "Chicken Sausage"
  },
  { id: 5,
    img: "./img/sction01_01.jpg",
    name: "MAPLE APPLE",
    info: "Chicken Sausage"
  },
];

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

  itemSlider.innerHTML = item;
}

slide(item);
