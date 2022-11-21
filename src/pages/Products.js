import React from 'react'
import ProductList from '../components/ProductList';


function Products() {

    return (
        <div>
            <div class="grid justify-items-stretch ...">
                <h1 className="justify-self-center text-2xl">Available Products</h1>
            </div>
            <ProductList />

        </div>

    );
}

export default Products;