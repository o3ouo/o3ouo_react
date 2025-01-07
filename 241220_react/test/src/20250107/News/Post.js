import React from 'react';

function Post({ posts, menu }) {

  return (
    <article className={menu.category}>
      <div className="inner">
        {
          posts.map(value => (
            <div key={value.article_id}>
              <h2>{value.title}</h2>
              <figure className="img-box">
                <img src={value.image_url} alt={value.title} />
              </figure>
              <p className="text">{value.description}</p>
            </div>
          ))
        } 
      </div>
    </article>
  );
}

export default Post;