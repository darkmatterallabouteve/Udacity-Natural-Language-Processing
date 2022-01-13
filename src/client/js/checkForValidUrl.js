//Regexp from the following post on stackoverflow
//https://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript

function checkForValidUrl(inputText) {
    console.log("::: Running checkForValidUrl :::", inputText);
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(inputText);
}


export { checkForValidUrl }
