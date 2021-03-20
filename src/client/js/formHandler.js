function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const inputURL = document.getElementById('name').value;
    const resultDiv = document.getElementById('results');
    const resultKeys = ['model', 'score_tag', 'agreement', 'subjectivity', 'confidence', 'irony'];


    //  capitalise first letter of the keys
    const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

    // create elements to display retrieved sentiment results
    const displaySentiment = (sentiment) => {
        const docFrag = new DocumentFragment();
        resultKeys.map(resultKey => {
            const keyPar = document.createElement('p');
            keyPar.innerText = `${capitalizeFirstLetter(resultKey)}: ${sentiment[resultKey]}`;
            docFrag.appendChild(keyPar);
        });
        resultDiv.innerText = "";
        resultDiv.appendChild(docFrag);
    };

    const getSentiment = async inputURL => {
        const dataPromise = await fetch('http://localhost:8081/getSentiment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "inputURL": inputURL })
        });

        try {
            const sentiment = await dataPromise.json()
            // console.log(sentiment)
            displaySentiment(sentiment);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    if (Client.isValidUrl(inputURL)) {
        // console.log("::: Form Submitted :::");
        getSentiment(inputURL);
    } else {
        alert("Invalid URL: Enter valid URL to proceed ...")
    }
}

export { handleSubmit }