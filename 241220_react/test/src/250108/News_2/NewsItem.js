import React from 'react';

function NewsItem({article}) {

  console.log(article);

  const {image_url, title, description, link} = article;

  return (
    <div>
      {
        // img가 존재하는 요소만 이미지 박스에 감싸면서 출력
        <img src={article.image_url}/> && (
          <div className="thumb">
            <a href={link} target='_blank'>
              <img src={image_url} alt={title} />
            </a>
          </div>
        )
      }
      <div className="contents">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItem;