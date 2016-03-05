/**
 * Created by philhannant on 05/03/2016.
 */
function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;
}


function getYCN(string){
    var xmlDoc = getXML("oscars.xml");

    var YearElements = xmlDoc.getElementsByTagName(string);

    for ( i = 0; i < authorElements.length; i++ )
        document.write("<p>", authorElements.item(i).firstChild.nodeValue, "</p>");

}

function getInput() {

    document.getElementById("userInput").submit();

}