import { useState, useEffect } from "react";
import { Api } from "../../api/Api";

export const ProdutosList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const atualizarListaProdutos = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());

            const results = await response.json();

            setProdutos(results);
        };

        atualizarListaProdutos();
    }, []);

    return (
        <div>
            {produtos.map((produtos, index) => (
                <div key={"produtos_" + index}>{produtos.name}</div>
            ))}
        </div>
    );
};
