import './css/Menu.css';
import React, {useState} from 'react';
import TemBox from './TemBox';


function Menu() {

  let sandwich = [
    {
      id: 1,
      name: "에그마요",
      nameEn: "Egg Mayo",
      kcal: "416",
      category: "클래식",
      img: "/241226_menu/에그마요.png",
    },
    {
      id: 2,
      name: "햄",
      nameEn: "Ham",
      kcal: "262",
      category: "클래식",
      img: "/241226_menu/햄.png",
    },
    {
      id: 3,
      name: "이탈리안 비엠티",
      nameEn: "ltalian B.M.T.™",
      kcal: "388",
      category: "클래식",
      img: "/241226_menu/이탈리안_BMT.png",
    },
    {
      id: 4,
      name: "머쉬룸",
      nameEn: "Mushroom",
      kcal: "245",
      category: "프레쉬&라이트",
      img: "/241226_menu/머쉬룸.png",
    },
    {
      id: 5,
      name: "로스트 치킨",
      nameEn: "Roasted Chicken",
      kcal: "300",
      category: "프레쉬&라이트",
      img: "/241226_menu/로스트_치킨.png",
    },
    {
      id: 6,
      name: "로티세리 바비큐 치킨",
      nameEn: "Rotisserie Marbecue Chicken",
      kcal: "327",
      category: "프레쉬&라이트",
      img: "/241226_menu/로티세리_바비큐_치킨.png",
    },
    {
      id: 7,
      name: "안창 비프",
      nameEn: "Beef",
      kcal: "342",
      category: "프리미엄",
      img: "/241226_menu/안창_비프.png",
    },
    {
      id: 8,
      name: "안창 비프&머쉬룸 썹픽",
      nameEn: "Beef&Mushroom SUBPICK",
      kcal: "427",
      category: "프리미엄",
      img: "/241226_menu/안창_비프&머쉬룸_썹픽.png",
    },
    {
      id: 9,
      name: "모닝 콰트로 치즈 햄&오믈렛",
      nameEn: "Moning Quattro Cheese Ham&Omelet",
      kcal: "448",
      category: "신제품",
      img: "/241226_menu/모닝_콰트로_치즈_햄&오믈렛.png",
    },
    {
      id: 10,
      name: "콰트로 치즈 스테이크&머쉬룸",
      nameEn: "Quattro Cheese Steak&Mushroom",
      kcal: "446",
      category: "신제품",
      img: "/241226_menu/콰트로_치즈_스테이크&머쉬룸.png",
    },
    {
      id: 11,
      name: "미트 추가",
      nameEn: "Meat",
      category: "추가선택",
      img: "/241226_menu/미트_추가.png",
    },
    {
      id: 12,
      name: "에그마요",
      nameEn: "Egg Mayo",
      category: "추가선택",
      img: "/241226_menu/에그마요_토핑.png",
    },
    {
      id: 13,
      name: "베이컨",
      nameEn: "Eacon",
      category: "추가선택",
      img: "/241226_menu/베이컨_토핑.png",
    },
  ]

  // category 선택
  const [tem, setCategory] = useState('all');

  // 메뉴 상세보기
  const [selectedItem, setSelectedItem] = useState(null);

  // 해당 카테고리 필터
  const filteredSandwich = tem === 'all' ? sandwich : sandwich.filter(item => item.category === tem);

  // 아이템을 선택했을 때 해당 아이템의 상세정보 표시
  const pick = (item) => {
    setSelectedItem(item);
  }

  return (
    <div className="wrap">
      {selectedItem ? 
      (<TemBox item={selectedItem} onClose={() => setSelectedItem(null)}/>
      ) : (
        <div>
          <nav className="nav">
            <button type="button" className="all-btn" onClick={() => (setCategory('all'))}>All</button>
            {/* new Set : 중복되는 값을 자동으로 제거 / []로 감싸 새로운 배열로 만듬 */}
            {[...new Set(sandwich.map(item => item.category))].map((category) => (
              <button 
              type="button" 
              className="menu-btn" 
              key={category} 
              onClick={() => setCategory(category)}
              >{category}</button>
            ))}
          </nav>

          <div className="contents">
            {filteredSandwich.map((item) => (
              // key 속성은 최상위 요소에만 적용하면 됨
              <div className="box" key={item.id} onClick={() => pick(item)}>
                <figure className="img">
                  <img src={item.img} alt={item.name}/>
                </figure>
                
                <div className="t-box">
                  <p className="name">{item.name}</p>
                  <p className="nameEn">{item.nameEn}</p>
                  <p className="kcal">{item.kcal} Kcal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Menu;