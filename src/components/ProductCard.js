import React from 'react'

function ProductCard({ rec }) {
    return (
        <div className="card card-compact w-96 bg-base-100 drop-shadow-2xl m-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{rec.product}</h2>
                <p className="h-10 overflow-hidden ... sm:">{rec.desc}</p>
                <div className="card-actions justify-end">
                    <a href={rec.url}><button className="btn btn-primary">Open</button></a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;