import React from "react";

export default function DeleteProduct(props) {
    const id = props.match.params.id;

    return <div>DeleteProduct {id}</div>;
}
