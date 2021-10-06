import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import ProductCard from "../ProductCard/ProductCard";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProductList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setProducts(results);
        };

        loadProductList();
    }, []);

    return (
        <div className="cards">
            {products.map((product, index) => (
                <ProductCard
                    key={`product_list_${index}`}
                    product={product}
                ></ProductCard>
            ))}
        </div>
    );
};
