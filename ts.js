function ts(colorIndicator, datein) {

    var seconds = Math.floor((new Date() - new Date(datein*1000)) / 1000);
    var interval = Math.floor(seconds / 31536000);

    sh(colorIndicator, seconds);

    if (interval >= 1) {
        return interval + " year" + (interval==1?'':'s');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " month" + (interval==1?'':'s');
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " day" + (interval==1?'':'s');
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hour" + (interval==1?'':'s');
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minute" + (interval==1?'':'s');
    }
    return Math.floor(seconds) + " second" + (interval==1?'':'s');
}
function sh(colorIndicator, seconds) {
    colorIndicator.style.backgroundColor = "hsl("+160*0.999995**seconds+",100%,40%)";
}
function cl(dateIndicator, colorIndicator, datein) {
    document.getElementById(dateIndicator).textContent = ts(document.getElementById(colorIndicator), datein)+" ago";
}
