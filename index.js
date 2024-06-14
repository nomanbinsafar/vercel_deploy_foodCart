function verify(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === "1234" && username === "noman") {
        redirect();
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}

function redirect(){
    window.location.href = "food.html";
    alert("welcome noman!");
}
