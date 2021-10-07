import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
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
            <br />
        </header>
    );
}
