let inShoppingList = "";
let inCart = "";
let ttlPrice = 0
let displayPrices = ""
$(".addCart").click(function(){
    let eyeD = $(this).attr('id')
    inCart += eyeD + "<br>";

    let price = $(this).attr('name')
    ttlPrice += parseFloat(price);
    displayPrices += "$" + price + "<br>";
    $(".cart").html(inCart + "<br><br>" + displayPrices + "______<br>Total: $" + ttlPrice.toFixed(2));
});

$("#address").click(function(){
    var address = prompt("Please enter your address before sending items:");
    $("#empty").html("<br>Address: " + address + "<br><br><input onclick='sent()' type='submit' value='Send'/>");
});

function sent(){
    alert("Items sent!");
}