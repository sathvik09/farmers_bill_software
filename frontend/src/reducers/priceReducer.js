const priceReducer = (state='',action)=>{
    switch (action.type) {
        case 'PRICE':
            return action.payload    
        default:
            return state;
    }
}

export default priceReducer;