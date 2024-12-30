function validate(){
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || number === "" || email === "" || message === "") {
        alert("All feiled must be filled");
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please write email correctly");
        return;
    }
}