function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputURL = document.getElementById('name').value;

    if (Client.isValidUrl(inputURL)) {
        console.log("::: Form Submitted :::");
        getSentiment(inputURL);
    }

    const getSentiment = async inputURL => {
        const dataPromise = await fetch('http://localhost:8081/getSentiment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputURL)
        });

        try {
            const sentiment = await dataPromise.json()
            console.log(sentiment)
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }


    export { handleSubmit }