 const orderDefaultState = [];
 
 const orderReducer = (state = orderDefaultState, action) => {
    //console.log(action.product)
    switch(action.type){
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.product
            ]
        default:
            return state;
    }
 };

 export default orderReducer;