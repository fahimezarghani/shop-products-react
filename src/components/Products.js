import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {

    render() {
        const {products, productActions} = this.props;
        return (

            <div className="row-wrap">

                {products.map((product) =>
                    <Product key={product.id}
                             product={product}
                             productActions={productActions}/>
                )}

            </div>
        );
    }
}

/*addToWishList={this.props.addToWishList}
addToCompare={this.props.addToCompare}*/
export default Products;