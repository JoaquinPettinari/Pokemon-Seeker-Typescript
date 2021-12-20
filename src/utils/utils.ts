import { URI_POKEAPI } from "./constants";

function getDefaultOptions() {
    return {
        uri: '',
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };
}
type RequestOption = {
    body: BodyInit | null | undefined;
};

const doRequest = async (uri: string, options: RequestOption | undefined) => {
    const defaultOptions = getDefaultOptions();
    const requestOptions = {
        ...options,
        ...defaultOptions,
    };
    requestOptions.uri = `${URI_POKEAPI}${uri}`;
    return fetch(requestOptions.uri, {
        method: requestOptions.method,
        headers: requestOptions.headers,
        body: requestOptions.body,
    }).then(async (response) => {
        if (!response.ok) {
            throw new Error("Not response");
        } else {
            return response.json();
        }
    });
};

export const apiPromise = (uri: string, options: RequestOption) =>
    doRequest(uri, options);

export const apiRequest = (
    uri: string,
    options: RequestOption,
    successCallback: (res: any) => void,
    failCallback: () => void
) => doRequest(uri, options).then(successCallback).catch(failCallback);

export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}