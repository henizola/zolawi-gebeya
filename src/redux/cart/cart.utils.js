export const addItemToCart=(cartItems,cartItemToAdd)=>{
const existingCartItem =cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);



if(existingCartItem){
    return cartItems.map(
        cartItem=>cartItem.id===cartItemToAdd.id?
        {...cartItem,quantity:cartItem.quantity+1}
        :cartItem)
}
return [...cartItems,{...cartItemToAdd,quantity:1}]
}



export const subtructItem=(cartItems,cartItemToSubstruct)=>{
    const existingCartItem =cartItems.find(cartItem=>cartItem.id===cartItemToSubstruct.id);

    if(existingCartItem.quantity===1)
                {
                    return cartItems.filter(cartItem=>cartItem.id!==cartItemToSubstruct.id)
                }
  else if(existingCartItem.quantity!==1){
        return cartItems.map(
            cartItem=>cartItem.id===cartItemToSubstruct.id?
            {...cartItem,quantity:cartItem.quantity-1}
            :cartItem)
        }
    return [...cartItems,{...cartItemToSubstruct,quantity:1}]
    }
    



// export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
//     const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id);

//     if(existingCartItem){
//         return cartItems.map(
//             cartItem=>cartItem.id===cartItemToRemove.id?
//             {
//                 ...cartItem,
//                 quantity:0
//             }:cartItem
//         )
//     }
//     return [...cartItems]

// }