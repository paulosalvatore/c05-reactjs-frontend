import React from "react";
import { Api } from "../../api/Api";

export default function Login(props) {
    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Constrói um payload com esses dados
        const payload = {
            email,
            password,
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

        const body = await response.json();

        if (response.status === 200) {
            // Login successfully

            const accessToken = body.accessToken;

            localStorage.setItem("JWT", accessToken);

            console.log({ accessToken });

            props.history.push(`/`);
        } else {
            // Error
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="form__label" htmlFor="email">
                        E-mail:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="text"
                        id="email"
                        name="email"
                    />
                </div>

                <div>
                    <label className="form__label" htmlFor="password">
                        Password:
                    </label>
                </div>

                <div>
                    <input
                        className="form__input-text"
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>

                <div>
                    <input
                        className="form__submit button--primary"
                        type="submit"
                        value="Login"
                    />
                </div>
            </form>
        </div>
    );
}
