import React, {Component} from 'react';
//, addToWishList, addToCompare

class Product extends Component {

    render() {

        const {product, productActions} = this.props;

        const onClick = () => {

        }

        let className = "product";
        className += (product.addedToCart) ? " pd-cart" : "";
        className += (product.addedToWishList) ? " pd-wishlist" : "";
        className += (product.addedToCompare) ? " pd-compare" : "";

        return (
            <React.Fragment>

                <div className="column-4">
                    <div id={product.id} className={className}>
                        <div className="image-wrap">
                            <div className="image"><img src={product.imgSrc} alt={product.name}/></div>

                            <div className="image-overlay"></div>

                            <div className="image-details">
                                <div className="btn-view shopping-cart" onClick={() => productActions(product.id , 'cart')}>
                                    <span className="fa fa-shopping-bag"></span>
                                </div>

                                <div className="btn-view wishlist" onClick={() => productActions(product.id , 'wishlist')}>
                                    <span className="fa fa-heart"></span>
                                </div>

                                <div className="btn-view compare" onClick={() => productActions(product.id , 'compare')}>
                                    <span className="fa fa-signal"></span>
                                </div>
                            </div>
                        </div>

                        <div className="info">
                            <div className="info-container">
                                <span className="product-price">{product.price}</span>
                                <span className="product-name">{product.name}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Product;