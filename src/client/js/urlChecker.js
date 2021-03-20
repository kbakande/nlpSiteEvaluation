function isValidUrl(inputURL) {
    console.log("::: Running checkForURL :::", inputURL);
    let validURL;

    try {
        validURL = new URL(inputURL);
    } catch (_) {
        return false;
    }

    return validURL.protocol === "http:" || validURL.protocol === "https:";
}

export { isValidUrl }