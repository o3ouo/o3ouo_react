import axios from 'axios';
// dispatch 호출은 자동으로 됨

function data(searchQuery) {
  return async (dispatch, getState) => {
    try {
      console.log('searchQuery : ', searchQuery)
      const response = await axios.get(`http://localhost:5000/products?q=${searchQuery}`);
      const filterDate = response.data.filter(item => item.title.includes(searchQuery))
      dispatch({type: "LIST", payload: filterDate});;
    } catch (error) {
      console.error('error');
    }
  }
}

export const productActions = {data};