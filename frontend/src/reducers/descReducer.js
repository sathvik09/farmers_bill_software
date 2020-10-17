const descReducer = (state='',action)=>{
    switch (action.type) {
        case 'DESC':
            return action.payload 
        default:
            return state;
    }
}

export default descReducer;