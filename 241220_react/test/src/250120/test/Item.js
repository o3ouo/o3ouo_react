import { useDispatch, useSelector } from 'react-redux';


const Item = () => {

  const dispatch = useDispatch();

  const item = [
    {id: 1, name: "A", price: 41200},
    {id: 2, name: "B", price: 221200},
    {id: 3, name: "C", price: 302110},
  ]

  const cart = () => {
    dispatch( {type: "CART", payload: {item}})
  }

  return (
    <li>
      {
        item.map((tem, idx) => (
          <div key={idx}>
            <h3>Item {tem.name}</h3>
            <p>price: {tem.price}￦</p>
            <button type="button" onClick={cart}>Cart</button>
          </div>
        ))
      }
    </li>
  );
}

export default Item