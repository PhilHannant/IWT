/**
 * Created by philhannant on 05/03/2016.
 */
function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;
}