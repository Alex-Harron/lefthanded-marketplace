export const addCart = (item) => ({
    type: "ADD_CART",
        payload: item
})

export const deleteCart = (item) => ({
    type: "DELETE_ITEM",
        payload: item
})