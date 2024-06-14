
function openCart() {
    document.getElementById("foodCart").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeCart() {
    document.getElementById("foodCart").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var cartItems = {};
var subtotal = 0;

function addToCart(itemName, itemPrice) {
    if (cartItems[itemName]) {
        cartItems[itemName].quantity += 1;
    } else {
        cartItems[itemName] = {price: itemPrice, quantity: 1};
    }
    updateCart();
}

function updateCart() {
    var cartDiv = document.getElementById("foodCart");
    var itemsDiv = document.createElement("div"); // Create a new div for the items
    itemsDiv.id = "items"; // Give it an id

    // Clear the items div
    var oldItemsDiv = document.getElementById("items");
    if (oldItemsDiv) {
        oldItemsDiv.remove();
    }

    subtotal = 0; // Reset the subtotal

    // Add each item in the cart to the items div
    var itemNo = 1;
    for (var itemName in cartItems) {
        var item = cartItems[itemName];
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = "No:"+itemNo + " Name: " + itemName + " Quantity: " + item.quantity + " Price: $" + (item.price * item.quantity).toFixed(2);
        itemsDiv.appendChild(itemDiv);
        subtotal += item.price * item.quantity;
        itemNo++;
    }

    // Add the subtotal to the items div
    var subtotalDiv = document.createElement("div");
    subtotalDiv.innerHTML = "Subtotal: $" + subtotal.toFixed(2);
    itemsDiv.appendChild(subtotalDiv);

    // Add the items div to the cart div
    cartDiv.appendChild(itemsDiv);
}

// Add event listeners to the "Add to Cart" buttons
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        var cell = e.target.parentElement;
        var itemName = cell.getElementsByTagName("h2")[0].innerText;
        var itemPrice = parseFloat(cell.getElementsByTagName("p")[0].innerText.slice(1)); // Remove the dollar sign and convert to number
        addToCart(itemName, itemPrice);
    });
}
