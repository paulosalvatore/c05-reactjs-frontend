import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="card__title">
                <h1>{product.name}</h1>
            </div>
            <div className="card__price">{product.price}</div>
            <div className="card__images">
                {product.images.map(image => (
                    <div className="card__image">
                        <img src={image.url} alt={product.name + "'s image"} />
                    </div>
                ))}
            </div>
        </div>
    );
}
