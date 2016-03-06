/**
 * Created by philhannant on 05/03/2016.
 */
function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;
}

/*
function getYCN(string){
    var xmlDoc = getXML("oscars.xml");

    var YearElements = xmlDoc.getElementsByTagName(string);

    for ( i = 0; i < authorElements.length; i++ )
        document.write("<p>", authorElements.item(i).firstChild.nodeValue, "</p>");

}



function getInput() {
    $('#userInput').submit(function() {
        // Get all the forms elements and their values in one step

    });

}


function searchXML() {
    var xmlDoc = getXML("oscars.xml");
    var x = xmlDoc.getElementsByTagName("Year");
    var input = document.getElementById("input").value;
    var size = input.length;
    if(input == null || input == "")
    {
        document.getElementById("results").innerHTML= "Please enter a Product Name!";
        return false;
    } else
    {
        for (i = 0; i < x.length; i++)
        {

            if (x.length > 0)
            {
                var date = xmlDoc.getElementsByTagName("Date")[i].childNodes[0].nodeValue;
                var product = xmlDoc.getElementsByTagName("ProductName")[i].childNodes[0].nodeValue;
                var quantity = xmlDoc.getElementsByTagName("Quantity")[i].childNodes[0].nodeValue;
                var grossprice = xmlDoc.getElementsByTagName("GrossPrice")[i].childNodes[0].nodeValue;
                var profit = xmlDoc.getElementsByTagName("Profit")[i].childNodes[0].nodeValue;
                var divText = "<h1>The contact details are:</h1><br /><table border=1><tr><th>Date</th><th>Product</th><th>Quantity</th><th>Gross Price</th><th>Profit</th></tr>" + "<tr><td>" + date + "</td><td>" + product + "</td><td>" + quantity + "</td><td>" + grossprice + "</td><td>" + profit + "</td></tr>" + "</table>";
                break;
            }
            else
            {
                var divText = "<h2>The product does not exist.</h2>";
            }
        }

        document.getElementById("results").innerHTML = divText;
    }
}
*/

$(document).ready(function(){
    $('#userInput').submit(function(){

        $("p").append("<b>Appended text</b>");


    });
});


$(document).ready(function() {
    $("#btn1").click(function () {
        $('#resultArea').append(" <b>Appended text</b>.");
    });
});
/*

 var values = $(this).serialize();
 alert(values);
var xmlDoc = getXML("oscars.xml");
$(xmlDoc).find("Year")
    .each(function() {
        document.resultArea.append(
            $(this).text());
    });*/