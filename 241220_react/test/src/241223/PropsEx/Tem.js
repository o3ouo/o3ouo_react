function Tem(props) {
  return (
    <div className="box">
      <figure>
        <img src={props.img} alt={props.name} />
      </figure>
      <p className="name">{props.name}</p>
      <p className="price">{props.price}</p>
    </div>
  );
}

export default Tem;