import '../App.css';

function Program() {
  return (
    <section className="program">
      <h2>program</h2>
      <div className="contents">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  )
}

function Box() {
  return (
    <div className="box">
      <figure className="img">
        <img src="/img/gojo.jpg" alt="dd" />
      </figure>
      <div className="text-box">
        <h3>title</h3>
        <p>
          name
          <span>2024년 y월 yy일 ~ y월 y일</span>  
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sunt necessitatibus animi earum incidunt voluptatibus dolore vitae voluptate dicta pariatur repudiandae quidem porro dolores quam, perferendis perspiciatis aspernatur quasi consectetur?
        </p>
      </div>
    </div>
  )
}

export default Program;

