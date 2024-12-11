animal.addEventListener("change",function () {
    console.log("change");  //change -> everytime you pick different options
    let choice = document.getElementById("animal").value;
    console.log(choice);
    
    if (choice=="bunny"){ //two "=" means evaluation
        console.log("it is bunny!");
        document.getElementById('animalmessage').innerHTML = 
        "B-Hop ૮꒰ ˶• ༝ •˶꒱ა ♡";
    }

    if (choice=="cat") {
        console.log("meowmeow");
        document.getElementById('animalmessage').innerHTML = 
        "Meow Meow ᓚᘏᗢ";
    }

    if (choice=="dog"){
        console.log("woofwoof");
        document.getElementById('animalmessage').innerHTML = 
        "Doggo •ﻌ•";
    }

    if (choice=="capybara") {
        console.log("capybararara");
        document.getElementById('animalmessage').innerHTML = 
        "It's capybara time baby";
    }
})

