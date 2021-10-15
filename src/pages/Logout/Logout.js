import React from "react";
import { LocalStorage } from "../../local-storage/LocalStorage";

export default function Logout(props) {
    LocalStorage.clearJwt();

    props.history.push("/login");

    return <div>Logout</div>;
}
