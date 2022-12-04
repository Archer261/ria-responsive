import React from 'react'
import ProductList from '../components/ProductList';


function Products() {

    return (
        <>
            <div className='container flex flex-col'>
                <div className="flex justify-center">
                    <h1 className="justify-self-center text-2xl">Available Products</h1>
                </div>
                <ProductList />
            </div>
        </>

    );
}

export default Products;