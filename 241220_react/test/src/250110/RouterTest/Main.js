import React from 'react';
import { useNavigate } from 'react-router-dom';
import Works from './Works';
import App from './App';

function Main() {

  const navigate =  useNavigate() // 훅 호출

  const more = () => {
    navigate('/About');
  }

  return (
    <main className="main">
      {/* slider */}
      <section className="slider">
        <App />
      </section>

      {/* about */}
      <section className="m-about">
        <div className="inner">
          <figure className="img-box">
            <img src="/250110_router_test/about.8b22278e.jpeg" alt="about img" />
          </figure>
          <div className="text-box">
            <p>YOO YOUNGKUK</p>
            <h2 className="title">
              한국 최초의 추상화가, 유영국
              <span>(1916-2002)</span>
            </h2>
            <p className="t">
              한국 최초의 추상화가, 유영국(1916-2002)
              유영국(劉永國,1916-2002) 화백은 한국 근대미술의 ‘전위(avant-garde)’에 서서 추상미술의 영역을 개척했던 선구자이다. 특히, 한국의 자연을 아름다운 색채와 대담한 추상 형태로 빚어낸 최고의 조형감각을 지닌 화가이다. 유영국은 1916년 산과 바다의 자연이 수려한 경상북도 울진에서 태어났다. 1935년에 도쿄 문화학원(文化學院)에서 미술공부를 시작했으며, 김환기, 장욱진, 이중섭 등과 교류했다. 비교적 자유로운 화풍을 자랑했던 문화학원에서, 그는 당시 도쿄에서도 가장 전위적인 미술운동이었던 ‘추상’을 처음부터 시도했다. 1938년 제2회 자유미술가협회전에서 협회상을 수상했고 바로 회우가 되었으며, 무라이 마사나리, 하세가와 사부로 등 당대 일본의 가장 영향력 있는 추상미술의 리더들과 교유하였다. 1943년 태평양전쟁의 포화 속에서 귀국, 해방과 한국전쟁을 거치며 어선을 몰고, 양조장을 경영하며 가족을 부양하기도 했다. 그러나 1955년 이후 서울에서 본격적인 미술활동을 재개, 신사실파, 모던아트협회, 현대작가초대전, 신상회(新象會)등 전위적인 미술단체를 이끌며 ‘한국 추상미술의 선구자’로 평가받았다.
            </p>
          </div>
          <button type="button" onClick={more}>VIEW MORE</button>
        </div>
      </section>

      {/* foundation */}
      <section className="m-foundation">
        <div className="inner">
          <div className="box">
            <figure className="img-box">
              <img src="/250110_router_test/yoo2.038164e5.jpeg" alt="foundation img-1" />
            </figure>
            <div className="text-box">
              "세월이란 참으로 묘한 것이어서 어떤 시대고 간에 꼭 있을만한 사람을 반드시 심어놓고 지나갑니다. 그 시대 그가 아니면 있을 수 없는 그런 일을 하는 사람들을 역사는 빠뜨리지 않는다는 것입니다. 선생의 빈소에서 그 분의 영정을 바라보는데 문득 '아 한 시대가 마감하는구나' 하는 생각이 나는 것이었습니다. "
              <span>최종태 (조각가)</span>
            </div>
          </div>
          <div className="box">
            <figure className="img-box">
              <img src="/250110_router_test/yoo2_2.93045460.jpg" alt="foundation img-1" />
            </figure>
            <div className="text-box">
              “ Yoo Young-kuk believed, with all certainty, that art was a way to build those visions that showed that the wrold can be different and better. "
              <span>Bartomeu Marí (전 국립현대미술관 관장)</span>
            </div>
          </div>
          <div className="box">
            <figure className="img-box">
              <img src="/250110_router_test/yoo2_3.20bebbea.jpeg" alt="foundation img-1" />
            </figure>
            <div className="text-box">
              " 그의 추상에의 길은 그에게 지워진 운명과도 같은 것이었음이 분명하다.
              그가 없었다면,그의 결단과 치열한 의식의 전개가 없었다면 한국 추상미술은,한국미술의 모더니즘은 어떻게 되었을까. "
              <span>오광수 (뮤지엄 산 관장)</span>
            </div>
          </div>
        </div>
      </section>

      {/* works */}
      <section className="m-works">
        <div className="inner">
          <h2>Works</h2>
          <div className="contents">
            <Works />
            <Works />
            <Works />
            <Works />
          </div>
        </div>
      </section>
    </main>
  );
}
 export default Main;


