import React from "react";
import { Redirect, Route } from "react-router";
import { LocalStorage } from "../../local-storage/LocalStorage";

export default function GuardedRoute({ component: Component, ...rest }) {
    const auth = LocalStorage.isJwtValid();

    return (
        <Route
            {...rest}
            render={props =>
                auth === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}
