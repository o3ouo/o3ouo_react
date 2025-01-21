import { useSelector } from 'react-redux';

const Cart = () => {

  const cart = useSelector(state => state)
  console.log(cart)

  return (
    <div>
      <h2>Cart</h2>
      <ul>

      </ul>
    </div>
  );
}

export default Cart;