import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ViewProduct(props) {
    const id = props.match.params.id;

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const loadProduct = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

            const results = await response.json();

            setProduct(results);
        };

        loadProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return <ProductCard product={product} />;
}
