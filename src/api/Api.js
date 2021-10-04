export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint

    readAllUrl: () => Api.baseUrl + "/product",

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),
};
