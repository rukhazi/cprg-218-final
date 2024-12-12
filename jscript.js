questions.addEventListener("change",function () {
    console.log("change");  //change -> everytime you pick different options
    let choice = document.getElementById("questions").value;
    console.log(choice);
    
    if (choice=="answer1"){ //two "=" means evaluation
        console.log("qethnicity");
        document.getElementById('answerinput').innerHTML = 
        "Raffy is a mix of Hispanic and Indigenous! ૮꒰ ˶• ༝ •˶꒱ა ♡";
    }

    if (choice=="answer2") {
        console.log("qhobby");
        document.getElementById('answerinput').innerHTML = 
        "Raffy Likes building legos and playing games; He especially loves building lego cars. ᓚᘏᗢ";
    }

    if (choice=="answer3"){
        console.log("qsanrio");
        document.getElementById('answerinput').innerHTML = 
        "Raffy's favorite Sanrio character would be chococat! •ﻌ•";
    }

    if (choice=="answer4") {
        console.log("qpokemon");
        document.getElementById('answerinput').innerHTML = 
        "Raffy's favorite pokemon is Oshawatt.";
    }
})


