
let freeEntry = false;

let = validClient = (time) => {
    let age = prompt("How old are you?");
    if (age >= 18) {
        if (time >= 2 && time < 7 && freeEntry == false) {
            alert("Please come in, you are the first person after 2 am");
            freeEntry = true;
        } else { 
            alert(`It's ${time}, you can come in, but you have to pay 10 dollars`)
        }

    } else {
        alert("Sorry, you must be 18 or older to enter");
    }

}


validClient(12)
validClient(1)
validClient(2)
validClient(6)
validClient(1)
validClient(2)
validClient(3)



