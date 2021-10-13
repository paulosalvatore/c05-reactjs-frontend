import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import LinkButton from "../../components/LinkButton/LinkButton";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ViewProduct.css";

export default function ViewProduct(props) {
    const id = props.match.params.id;

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const loadProduct = async () => {
            const response = await Api.buildApiGetRequest(
                Api.readByIdUrl(id),
                true
            );

            const results = await response.json();

            setProduct(results);
        };

        loadProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product">
            <div className="product__buttons">
                <LinkButton
                    to={"/product/update/" + id}
                    className="button button--primary"
                >
                    Edit
                </LinkButton>

                <LinkButton
                    to={"/product/delete/" + id}
                    className="button button--danger"
                >
                    Delete
                </LinkButton>
            </div>

            <ProductCard product={product} />
        </div>
    );
}
