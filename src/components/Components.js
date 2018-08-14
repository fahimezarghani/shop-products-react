import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as productActions from '../actions/index.js';
import {connect} from 'react-redux';
import Products from './Products';
import Compare from './Compare';
import WishList from './WishList';
import Cart from './Cart';

class Components extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        productActions.getProducts( dispatch );
    }

    ProductActions( id , type ){
        const { dispatch } = this.props;
        if(type == 'cart'){
            dispatch( productActions.toggleProductInCart( id ) );
        }
        if(type == 'wishlist'){
            dispatch( productActions.toggleProductInWishList( id ) );
        }
        if(type == 'compare'){
            dispatch( productActions.toggleProductInCompare( id ) );
        }
    }

    render() {

        const {products} = this.props;
        const addedToCartProducts =     products.filter(product => product.addedToCart);
        const addedToWishListProducts = products.filter(product => product.addedToWishList);
        const addedToCompareProducts =  products.filter(product => product.addedToCompare);

        const RouteProducts = () => (
            <div className="container">
                <h2>Products</h2>
                <Products products={products} productActions={this.ProductActions.bind(this)} />
            </div>
        );
        const RouteCart = () => (
            <div className="container">
                <h2>Cart</h2>
                {addedToCartProducts.length >= 1 ?
                    <Cart products={addedToCartProducts} productActions={this.ProductActions.bind(this)} />
                    :
                    <h5>Cart is empty ...</h5>
                }
            </div>
        );
        const RouteWishList = () => (
            <div className="container">
                <h2>WishList</h2>
                {addedToWishListProducts.length >= 1 ?
                    <WishList products={addedToWishListProducts} productActions={this.ProductActions.bind(this)} />
                    :
                    <h5>WishList is empty ...</h5>
                }
            </div>
        );
        const RouteCompare = () => (
            <div className="container">
                <h2>Compare</h2>
                {addedToCompareProducts.length >= 1 ?
                    <Compare products={addedToCompareProducts} productActions={this.ProductActions.bind(this)} />
                    :
                    <h5>Compare is empty ...</h5>
                }
            </div>
        );

        return (
            <div>
                <Router>
                    <div>
                        <div className="menu">
                            <ul className="container">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Wish List</Link>
                                </li>
                                <li>
                                    <Link to="/compare">Compare</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="content">
                            <Route exact path="/" component={RouteProducts} />
                            <Route path="/cart" component={RouteCart} />
                            <Route path="/wishlist" component={RouteWishList} />
                            <Route path="/compare" component={RouteCompare} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.toggleProduct.products
});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);
