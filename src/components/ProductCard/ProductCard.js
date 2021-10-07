import React from "react";
import { useHistory } from "react-router";

export default function ProductCard({ product }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/product/view/${product.id}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className="card__title">
                <h1>{product.name}</h1>
            </div>

            <div className="card__price">${product.price.toFixed(2)}</div>

            <div className="card__images">
                {product.images.map((image, index) => (
                    <div key={`product_image_${index}`} className="card__image">
                        <img src={image.url} alt={product.name + "'s image"} />
                    </div>
                ))}
            </div>
        </div>
    );
}
