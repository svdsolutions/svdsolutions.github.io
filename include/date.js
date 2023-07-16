document.addEventListener("DOMContentLoaded", function() {
    let dateElement = document.getElementById("date");
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let dateString = `${day}-${month}-${year}`;
    dateElement.innerHTML = dateString;
});
