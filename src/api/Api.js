export const Api = {
    baseUrl: "https://pokeapi.co/api/v2",

    readAllUrl: () => Api.baseUrl + "/pokemon",

    // GET
    buildApiGetRequest: url => 
        fetch(url, {
            method: "GET"
        }),
};