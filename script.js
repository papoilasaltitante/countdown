var pastDate = new Date("May 20, 2023 22:27:00").getTime();

var elapsedFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - pastDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
    document.getElementById("message").innerHTML = "It's been...";
}, 1000);

var stopwatchInterval;
var stopwatchTime = 0;

document.getElementById("stopwatch-start").addEventListener("click", function() {
    stopwatchInterval = setInterval(function() {
        stopwatchTime++;
        var minutes = Math.floor(stopwatchTime / 60);
        var seconds = stopwatchTime % 60;
        document.getElementById("stopwatch-time").innerHTML = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
});

document.getElementById("stopwatch-stop").addEventListener("click", function() {
    clearInterval(stopwatchInterval);
});

document.getElementById("stopwatch-reset").addEventListener("click", function() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById("stopwatch-time").innerHTML = "0:00";
});
