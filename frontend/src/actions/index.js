export const userBuilder = s=>{
    return{
        type:'USERNAME',
        payload:s
    }
}

export const passwordBuilder = input=>{
    return{
        type:'PASSWORD',
        payload:input
    }
}
export const prdNameBuilder = input=>{
    return{
        type:'PRODUCT',
        payload:input
    }
}
export const priceBuilder = input=>{
    return{
        type:'PRICE',
        payload:input
    }
}
export const descBuilder = input=>{
    return{
        type:'DESC',
        payload:input
    }
}

