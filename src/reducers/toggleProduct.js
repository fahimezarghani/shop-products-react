
const initialState = {
    products: []
};
const toggleProduct = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.products.map(product =>
                    ({
                        ...product,
                        addedToCart      : false,
                        addedToWishList  : false,
                        addedToCompare   : false,
                    })
                )
            }
        case 'TOGGEL_PRODUCT_IN_CART':
            return{
                ...state, products: state.products.map(product =>
                    product.id === action.id ?
                        ({...product, addedToCart: !product.addedToCart}) :
                        product
                )
            }
        case 'TOGGEL_PRODUCT_IN_WISHLIST':
            return{
                ...state, products: state.products.map(product =>
                    product.id === action.id ?
                        ({...product, addedToWishList: !product.addedToWishList}) :
                        product
                )
            }
        case 'TOGGEL_PRODUCT_IN_CAMPARE':
            return{
                ...state, products: state.products.map(product =>
                    product.id === action.id ?
                        ({...product, addedToCompare: !product.addedToCompare}) :
                        product
                )
            }
        default:
            return state
    }
}

export default toggleProduct;
