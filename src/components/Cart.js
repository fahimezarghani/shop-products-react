import React, {Component} from 'react';

class Cart extends Component {
    render(){

        const {products , productActions} = this.props;

        return(

            <div className="Cart">
                <div className="text-center">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="td-delete"></th>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>

                            {products.map((product) =>
                                <tr>
                                    <td className="td-delete" key={"delete-" + product.id}>
                                        <button className="btn-delete" onClick={() => productActions(product.id , 'cart')}>x</button>
                                    </td>
                                    <td key={"imgSrc-" + product.id}><img src={product.imgSrc} alt={product.name} /></td>
                                    <th key={"name-" + product.id}>{product.name}</th>
                                    <td className="text-center" key={"price-" + product.id}>{product.price}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Cart;