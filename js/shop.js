// JavaScript Document
var customername = "Chaky";
var price = 10;
var quantity = 3;
var totalprice = 0;
var totalpice_discounted = 0;

var products = ["Pizza","Nan","Sourdough","Foccacia","iPhone X"];
var price = [40,10,20,80,1000];

for (i = 0; i < products.length; i++) { 
   var productsText = "";
   var productsElement = document.getElementById("pro"+i);
   productText = "<li class='list-group-item'>" + products[i] + "<span class='badge'>$"+ price[i] + "</li>";
   productsElement.innerHTML = productText;
   totalprice = totalprice+price[i]; 
}

var myDate = new Date();
if ( myDate.getHours() < 12 )
 { document.getElementById("greeting").innerHTML = "Good Morning ";
} else if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{ document.getElementById("greeting").innerHTML = "Good Afternoon "; } 
else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ document.getElementById("greeting").innerHTML = "Good Evening "; } 
else { document.write("I'm not sure what time it is! "); }


var customer = document.getElementById("customer-name");
customer.innerHTML = customername;

totalprice_discounted = totalprice-((25/100)*totalprice);
document.getElementById("price").innerHTML = "$" + totalprice_discounted;