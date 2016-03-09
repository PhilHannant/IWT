function getXML(myUrl) {
    var xhr = $.ajax({
        url:      myUrl,
        datatype: "xml",
        async:    false
    });
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



function getInput(year) {

    var input = 'Oscars/' + "[Nomination/Year='" + year + "']";
    var xmlDoc = getXML("oscars.xml");
    var stylesheet = getXML("oscarsStylesheet.xsl");
    $(stylesheet).find("xsl\\:for-each, for-each")
        .first()
        .attr("select", "/Oscars/Nomination[@Year='2010 (83rd)']");


    if (typeof (XSLTProcessor) != "undefined") {
        var processor = new XSLTProcessor();
        processor.importStylesheet(stylesheet);
        var resultFragment = processor.transformToFragment(xmlDoc, document);
        document.getElementById("resultArea").appendChild(resultFragment);

    } else {
        window.alert("Your browser does not support the XSLTProcessor object");

        //alert(year + yearOp + cat + catOp + nom + nomOp);
    }

}

function test(){
    var xmlDoc = getXML("oscars.xml");
    $(xmlDoc).find("//Year")
        .each(function() {
            document.write("<tr><td>",
                $(this).text(),
                "</td></tr>");
        });
}

function letsSee(){

    var xmlDoc = getXML("oscars.xml");
    var stylesheet = getXML("oscarsStyleSheet.xsl");
    $(stylesheet).find("xsl\\:value-of, value-of").first().attr("select","/Oscars/Nomination/Year");
    if (typeof (XSLTProcessor) != "undefined") {
        var proc = new XSLTProcessor();
        proc.importStylesheet(stylesheet);
        var resultFragment = proc.transformToFragment(xmlDoc, document);
        document.getElementById("resultArea").appendChild(resultFragment);
    } else {
        window.alert("Your browser does not support the XSLTProcessor object");
    }



}



/*


 <!--

 }
 // -->


 var values = $(this).serialize();
 alert(values);
var xmlDoc = getXML("oscars.xml");
$(xmlDoc).find("Year")
    .each(function() {
        document.resultArea.append(
            $(this).text());
    });*/