import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

import "./Header.css";

export default function Header() {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        // Função de limpeza
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    return (
        <header className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://blueedtech.com.br/wp-content/themes/blue/dist/images/logo-blue-croped.gif"
                    alt="Blue EdTech's Logo"
                />
            </Link>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/product/create">Create</Link>
            <br />
            {isLogged ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <br />
            <br />
        </header>
    );
}
