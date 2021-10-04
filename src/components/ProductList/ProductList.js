import { useState, useEffect } from "react";
import { Api } from "../../api/Api";

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
        <div>
            {products.map((produtos, index) => (
                <div key={"product_list_" + index}>{produtos.name}</div>
            ))}
        </div>
    );
};
