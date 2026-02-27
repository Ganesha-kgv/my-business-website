function showMessage() {
    alert("Thank you for supporting Sustainable KGV!");
}
function submitForm(event) {
    event.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(
        "Thank you " + name + "!\n\n" +
        "We will get back to you:\n" +
        message
    );
}