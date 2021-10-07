export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint - Product

    readAllUrl: () => Api.baseUrl + "/product",

    readByIdUrl: id => Api.baseUrl + "/product/" + id,

    createProductUrl: () => Api.baseUrl + "/product",

    updateUrl: id => Api.baseUrl + "/product/" + id,

    deleteUrl: id => Api.baseUrl + "/product/" + id,

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

    // PATCH
    buildApiPatchRequest: (url, body) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: url =>
        fetch(url, {
            method: "DELETE",
        }),
};
