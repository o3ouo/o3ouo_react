import React from 'react';
import './Ap.css';

function Sass() {
  return (
    <div>
      {/* 
      css의 전처리기로, css 보다 더 활용성이 좋은 고급기능을 제공하여 스타일 작성의 효율성과 유지보수성을 높임 / html은 css만 연결이 되기 때문에 sass, scss는 연결되지 않는다 (파일 만들고 전처리기를 생성해서 넣으면 알아서 맵핑해 css로 변환해서 사용)

      1. 설치(node.js가 있어야 가능) : npm install -g sass
      2. 두 가지 파일 생성(scss, css)
      3. 컴파일 (사용할 scss 파일과 연결할 css를 연결하는 작업) : sass input.scss output.css
        > 연결만 해놓은 상태
      4. 변경시 자동으로 컴파일 되게 제작 : sass --watch input.scss output.css

      sass : 들여쓰기 기반 문법 >> {}, ; 사용하지 않음

      ex. ul
            margin: 1rem
            padding: 1rem

              li 
                margin: 1rem
                padding: 1rem

      scss : css와 유사한 문법 >> {}, ; 사용

      ex. ul {
            margin: 1rem
            padding: 1rem

              li {
                margin: 1rem
                padding: 1rem
                &:first-child {}
              }
            }
              
      버전 차이  

      변수 선언 가능 (반복적으로 사용하는 값을 재사용 할 수 있음)
      > css 변수 선언
        :root {
          --color-w: #fff;
        }
      > scss 변수 선언
        $이름
        $w-color: #fff;
  


      */}

      <h2>Scss 사용</h2>

      <div className="Allbox">
        <div className="box">
          <div className="item"></div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <button type="button" className="pbtn">PBtn</button>
      <button type="button" className="cbtn">CBtn</button>

      <div className="contents"></div>

      <div className="fbox">하이방가방가 햄토리</div>
    </div>
  );
}

export default Sass;