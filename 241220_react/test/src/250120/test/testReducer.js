let itemState = {
  id:[]
};

function testReducer (state = itemState, action) {
    
  console.log("action", action);


  switch (action.type) {
    case "CART" :
      const idx = action.payload.item.map((tem) => {
        return tem.id
      });

      if (idx) {
        idx.find((e) => e === action.payload.item.id);
      }
    default : 
     return {...state}
  }


}

export default testReducer;