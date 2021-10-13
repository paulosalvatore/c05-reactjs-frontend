import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function UpdateProduct(props) {
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

    const firstImage = product.images[0];

    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const name = event.target.name.value;
        const price = +event.target.price.value;
        const imageUrl = event.target.imageUrl.value;

        // Constrói um payload com esses dados
        const payload = {
            name,
            price,
            images: [
                {
                    id: firstImage?.id || -1,
                    url: imageUrl,
                },
            ],
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPatchRequest(
            Api.updateUrl(id),
            payload,
            true
        );

        const body = await response.json();

        if (response.status === 200) {
            // Product updated successfully

            const id = body.id;

            props.history.push(`/product/view/${id}`);
        } else {
            // Error
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="form__label" htmlFor="name">
                        Name:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={product.name}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="price">
                        Price:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="number"
                        id="price"
                        name="price"
                        defaultValue={product.price}
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="imageUrl">
                        Image URL:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={firstImage?.url}
                    />
                </div>

                <div>
                    <input
                        className="form__submit button button--primary"
                        type="submit"
                        value="Edit"
                    />
                </div>
            </form>
        </div>
    );
}
