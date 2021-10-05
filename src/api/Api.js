export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint - Product

    readAllUrl: () => Api.baseUrl + "/product",

    createProductUrl: () => Api.baseUrl + "/product",

    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),
};
