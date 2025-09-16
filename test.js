let login = prompt("Who are you?", "");

if (login === null || login === "") {
    alert("Canceled");
} else {
    if (login === "Admin") {
        let passwd = prompt("What is the password?", "");

        if (passwd === "TheMaster") {
            alert("Welcome!");
        } else {
            if (passwd === null || passwd === "") {
                alert("Canceled")
            }
            else {
                alert("Wrong password")
            } 
        }
    }
    else {
        alert("I don't know you")
    }
}