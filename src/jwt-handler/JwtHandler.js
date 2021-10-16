export const JwtHandler = {
    JWT_KEY: "JWT",

    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        window.dispatchEvent(JwtHandler.onChangeEvent);
    },

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value);

        JwtHandler.onChange();
    },

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY);

        JwtHandler.onChange();
    },

    getJwt: () => {
        return localStorage.getItem(JwtHandler.JWT_KEY);
    },

    isJwtValid: () => Boolean(JwtHandler.getJwt()),
};
