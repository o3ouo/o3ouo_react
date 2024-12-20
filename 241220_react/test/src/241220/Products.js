import '../App.css';

function Products() {
  return (
    <section>
      <div className="Products">
        <h2>Products</h2>
          <Box />
          <Box />
      </div>
    </section>
  )
}

function Box() {
  return (
    <div className="contents">
      <figure className="img">
        <img src="/img/gojo2.jpg" alt="gg" />
      </figure>
      <div className="text-box">
        <h3>title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro distinctio veniam doloribus reprehenderit! Dolorem earum quas natus harum non reiciendis, provident reprehenderit tempore, consectetur aperiam iste libero adipisci quam?
        </p>
      </div>
    </div>
  )
}

export default Products;