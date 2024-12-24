import './css/Main.css';

function Main() {

  let title = [
    {
      title: "투데이",
    },
    {
      title: "차트",
    },
    {
      title: "최신앨범",
    },
    {
      title: "DJ 스테이션",
    },
    {
      title: "VIBE MAG",
    },
    {
      title: "이달의 노래",
    },
  ];

  let tem = [
    {
      name: "지금인기",
      img: "/241224_props_ex/b1.png",
    },
    {
      name: "힙터질때",
      img: "/241224_props_ex/b2.png",
    },
    {
      name: "신났을때",
      img: "/241224_props_ex/b3.png",
    },
    {
      name: "우울할때",
      img: "/241224_props_ex/b14.png",
    },
    {
      name: "사랑할때",
      img: "/241224_props_ex/b4.png",
    },
    {
      name: "사랑했을때",
      img: "/241224_props_ex/b5.png",
    },
    {
      name: "집중할때",
      img: "/241224_props_ex/b7.png",
    },
    {
      name: "멍때릴때",
      img: "/241224_props_ex/b12.png",
    },
    {
      name: "운동할때",
      img: "/241224_props_ex/b13.png",
    },
    {
      name: "휴식할때",
      img: "/241224_props_ex/b9.png",
    },
    {
      name: "파티할때",
      img: "/241224_props_ex/b10.png",
    },
    {
      name: "외로울때",
      img: "/241224_props_ex/b8.png",
    },
    {
      name: "덜깼을때",
      img: "/241224_props_ex/b11.png",
    },
    {
      name: "잠안올때",
      img: "/241224_props_ex/b6.png",
    },
  ];

  return (
    <main className="main">
      <div className="top">

        {/* {title.map((vaule, index) => {
          return (
            <Title key={index} title={vaule.title}/>
          )
        })} */}
        <Title title="DJ 스테이션"/>
        <button className="t-btn">테마</button>
      </div>

      <h3 className="sub-title">느낌별 스테이션</h3>

      <div className="contents">
        {tem.map((value, index) => {
          return (
            <Con key={index} img={value.img} name={value.name}/>
          )
        })}
      </div>
    </main>
  );
}

const Title = (props) => {
  return (
    <h2 className="title">{props.title}</h2>
  );
}

const Con = (tem) => {
  return (
    <figure className="img-box">
      <img src={tem.img} alt={tem.name} />
    </figure>
  );
}

export default Main;