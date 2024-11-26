let menu = [
  {
    id: 1,
    kname: "쿼터치즈벅피자",
    ename: "Quater Cheesebuck Pizza",
    btn: "피자",
    price: 20900,
    img: "fred_pizza/pizza01.jpg",
  },
  {
    id: 2,
    kname: "할라불고기피자",
    ename: "Jalapenos bulgogi Pizza",
    btn: "피자",
    price: 20900,
    img: "fred_pizza/pizza02.png",
  },
  {
    id: 3,
    kname: "핫불닭피자",
    ename: "Hot Buldak Pizza",
    btn: "피자",
    price: 20900,
    img: "fred_pizza/pizza03.png",
  },
  {
    id: 4,
    kname: "불고기 크림 스파게티",
    ename: "Bulgogi Cream Spaghetti",
    btn: "사이드",
    price: 6900,
    img: "fred_pizza/side01.png",
  },
  {
    id: 5,
    kname: "치즈 오븐 스파게티",
    ename: "Cheese Oven Spaghetti",
    btn: "사이드",
    price: 5900,
    img: "fred_pizza/side02.png",
  },
  {
    id: 6,
    kname: "레드킹 닭다리",
    ename: "Red Hot Chicken Drum Srick",
    btn: "사이드",
    price: 5900,
    img: "fred_pizza/side03.png",
  },
  {
    id: 7,
    kname: "비비 플렉스 세트",
    ename: "BIBI Flex Set",
    btn: "세트",
    price: 31900,
    img: "fred_pizza/set01.png",
  },
  {
    id: 8,
    kname: "1+1 세트",
    eaeme: "1+1 Set",
    btn: "세트",
    price: 31900,
    img: "fred_pizza/set02.png",
  },
  {
    id: 9,
    kname: "4인 갓성비 세트",
    ename: "Set for 4",
    btn: "세트",
    price: 42900,
    img: "fred_pizza/set03.png",
  },
];

let contents = document.querySelector(".item_box");
let category = document.querySelector(".category");
console.log(category)

// menu 데이터를 받아서 화면에 출력하는 기능의 함수
function menubox(menu) {

  // menu 배열을 map으로 순회, 각 항목에 대해 HTML 구조를 만듬
  let item = menu.map( items => {
    console.log(items);
    return `
      <a href="#">
        <figure class="img">
          <img src= ${items.img} alt= ${items.kname}>
        </figure>
        <div class="info">
          <h3 class="ko">${items.kname}</h3>
          <h4 class="en">${items.ename}</h4>
        </div>
      </a>
    `
  });

  console.log(item);
  item = item.join("");

  contents.innerHTML = item;
};

// category button
function categoryBox () {
  
  // let categorys = menu.reduce( (value, item) => {
    
  //   if (!value.includes(item.btn)) {
  //     value.push(item.btn);
  //   }
  //   return value;
  // },
  // [""] // 초기화값
  // );

  let categorys = menu.map( menuN => {
    return (menuN.btn);
  });

  categorys = [...new Set(categorys)];

let btn = categorys.map( menuN => {
  return `
  <button type = "button" class = "btn" data-id = ${menuN}>${menuN}</button>
  `
}).join("");
console.log(btn);

category.innerHTML = btn;
let btnAll = category.querySelectorAll(".btn");
console.log(btnAll);

btnAll.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset);
    let cbox =  e.currentTarget.dataset.id;
    console.log(cbox);
    btnAll.forEach( li => {
      li.classList.remove("on");
    });

    btn.classList.add("on");

    let menu_c = menu.filter( value => {
      if (value.btn === cbox) {
        return value;
      }
    });

    // if (cbox === "피자") {
    //   menubox(menu);
    // } else {
    //   menubox(menu_c);
    // };
    menubox(menu_c);

  });
});

};

// menubox 함수 호출

categoryBox();

// menu slide down
let mainMenu = document.querySelectorAll(".menu_m>li");

mainMenu.forEach( (menu) => {
  menu.addEventListener("mouseover", () => {
    let subMenu = menu.querySelector(".menu_s");
    subMenu.style.opacity = "1";
    subMenu.style.height = "300px";
  
  });

  menu.addEventListener("mouseout", () => {
    let subMenu = menu.querySelector(".menu_s");
    subMenu.style.opacity = "0";
    subMenu.style.height = "0";

  });
})

// 카테고리 첫 번째 메뉴에 클래스 주기
let onb = document.querySelector(".category button:first-child");

onb.classList.add("on");