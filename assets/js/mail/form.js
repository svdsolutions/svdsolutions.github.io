function sendmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "business.idgyt@gmail.com",
        Password : "bsvvpgnhecprwuyd",
        To : 'help@svdsolutions.in',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}