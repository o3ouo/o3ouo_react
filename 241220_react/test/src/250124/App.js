import React, { useEffect } from 'react'
// import { listAction } from './redux/action/listAction';
import { getProducts } from './redux/reducer/listslice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();  
  const {list, status} = useSelector(state => state.List)

  // const data = () => {
  //   dispatch(getProducts())
  // }

  useEffect(() => {
    // data();
    dispatch(getProducts())
  }, [dispatch])

  if (status === "loading") return <h3>...loading</h3>;
  if (status === "failed") return <h3>...error...</h3>;

  console.log(list)
  
  return ( 
    <div>
      {
        list.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
          </div>
        ))
      }
    </div>
   );
}
 
export default App;