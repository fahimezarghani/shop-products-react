import React, {Component} from 'react';

class Compare extends Component {
    render(){

        const {products , productActions} = this.props;

        return(

            <div className="compare">
                <div className="text-center">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th></th>
                                {products.map((product) =>
                                    <th key={"delete-" + product.id}>
                                        <button className="btn-delete" onClick={() => productActions(product.id , 'compare')}>x</button>
                                    </th>
                                )}
                            </tr>
                            <tr>
                                <th></th>
                                {products.map((product) =>
                                    <th key={"imgSrc-" + product.id}><img src={product.imgSrc} alt={product.name} /></th>
                                )}
                            </tr>
                            <tr>
                                <th>Name</th>
                                {products.map((product) =>
                                    <th key={"name-" + product.id}>{product.name}</th>
                                )}
                            </tr>
                            <tr className="price">
                                <th>Price</th>
                                {products.map((product) =>
                                    <td className="text-center" key={"price-" + product.id}>{product.price}</td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default Compare;