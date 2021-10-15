export const LocalStorage = {
    JWT_KEY: "JWT",

    setJwt: value => {
        localStorage.setItem(LocalStorage.JWT_KEY, value);
    },

    getJwt: () => {
        return localStorage.getItem(LocalStorage.JWT_KEY);
    },

    isJwtValid: () => Boolean(LocalStorage.getJwt()),

    clearJwt: () => {
        localStorage.removeItem(LocalStorage.JWT_KEY);
    },
};
