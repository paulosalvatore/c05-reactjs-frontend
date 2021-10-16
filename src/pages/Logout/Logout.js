import React from "react";
import { Redirect } from "react-router";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

export default function Logout() {
    JwtHandler.clearJwt();

    return <Redirect to="/login" />;
}
