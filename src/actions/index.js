export const getProducts = (dispatch) => {
    fetch(`products.json`)
        .then(result => result.json())
        .then(result => {
            dispatch({
                type: 'GET_PRODUCTS',
                products: result.products
            })
        })
}

export const toggleProductInCart = id => ({
    type: 'TOGGEL_PRODUCT_IN_CART',
    id
});

export const toggleProductInWishList = id => ({
    type: 'TOGGEL_PRODUCT_IN_WISHLIST',
    id
});

export const toggleProductInCompare = id => ({
    type: 'TOGGEL_PRODUCT_IN_CAMPARE',
    id
});
