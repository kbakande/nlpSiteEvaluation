function isvalidUrl(inputURL) {
    console.log("::: Running checkForURL :::", inputURL);
    const validURL;

    try {
        validURL = new URL(inputURL);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export { isValidUrl }