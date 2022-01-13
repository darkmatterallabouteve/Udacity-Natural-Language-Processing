function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let urlText = document.getElementById('urlText').value;

    //Clear the results and validation message
    document.getElementById('results').innerHTML = "";
    document.getElementById('inputErrorMsg').innerHTML = "";

    if(!Client.checkForValidUrl(urlText)){
        document.getElementById('inputErrorMsg').innerHTML = "Invalid URL or Empty input (example: https://www.google.com)";
        return false;
    }

    console.log("::: Form Submitted :::")

    //fetch('http://localhost:8081/aylienNewsApiCall', {
    fetch('http://localhost:8081/meaningCloudApiCall', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title:urlText })
        })
    .then(res => res.json())
    .then(function(res) {
        console.log("Returned")
        console.log(res)

        // let storyArray = res.stories;
        // for (let i in storyArray) {
        //     document.getElementById('results').innerHTML += "(" + i + ") " + storyArray[i].title + "<br/>";
        // }

        document.getElementById('results').innerHTML += "( Agreement ) " + res.agreement + "<br/>";
        document.getElementById('results').innerHTML += "( Subjectivity ) " + res.subjectivity + "<br/>";
        document.getElementById('results').innerHTML += "( Confidence ) " + res.confidence + "<br/>";
        document.getElementById('results').innerHTML += "( Irony ) " + res.irony + "<br/>";
    })
}

export { handleSubmit }
