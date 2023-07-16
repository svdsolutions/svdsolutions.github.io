// Get the current time in 12-hour format
document.addEventListener("DOMContentLoaded", function() {
    let timeElement = document.getElementById("time");
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let timeString = `${hours}:${minutes} ${ampm}`;
    timeElement.innerHTML = timeString;
});
