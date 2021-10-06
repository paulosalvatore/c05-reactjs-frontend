import React from "react";

export default function ViewProduct(props) {
    const id = props.match.params.id;

    return <div>ViewProduct {id}</div>;
}
