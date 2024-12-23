import './css/Item.css';
import Tem from './Tem';

function Item() {
  let box = [
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-8.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-8.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-6.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-4.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-2.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-1.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-7.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-5.jpg",
    },
    {
      name:"Debossed Multi Logo Nylon Shark Full Zip Down",
      price:"￦1,079,000",
      img:"/241223_props_ex/image-3.jpg",
    },
  ]

  return (
    <div className="new">
      <h2 className="title">신상품</h2>

      <div className="temBox">
        {/* <Tem name="Debossed Multi Logo Nylon Shark Full Zip Down" img="/241223_props_ex/image-8.jpg" price="￦1,079,000"/>
        <Tem name="Baby Milo 25th Anniv. Plush Doll Tee" img="/241223_props_ex/image-6.jpg" price="￦164,000"/>
        <Tem name="Christmas Ape Head Tee" img="/241223_props_ex/image-4.jpg" price="￦164,000"/>
        <Tem name="Aurora Ape Head Tee" img="/241223_props_ex/image-2.jpg" price="￦164,000"/>
        <Tem name="Asia Camo Bomber Jacket" img="/241223_props_ex/image-1.jpg" price="￦1,056,000"/>
        <Tem name="Damage Relaxed Fit Sweater" img="/241223_props_ex/image-7.jpg" price="￦563,000"/>
        <Tem name="Asia Camo Coach Jacket" img="/241223_props_ex/image-5.jpg" price="￦557,000"/>
        <Tem name="Gore-Tex Wind Stopper 1st Camo Relaxed Coach Jacket" img="/241223_props_ex/image-3.jpg" price="￦774,000"/> */}

        {box.map((boxs, i) => {
          return ( <Tem key={i} name={boxs.name} price={boxs.price} img={boxs.img} />);
          // 반복해서 key의 값을 가지고 올 때는 key={}를 사용해야 한다고 약속함.
        })}
      </div>
    </div>
  );
}

export default Item;