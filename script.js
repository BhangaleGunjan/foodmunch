function toHomePage() {
    window.location.href = "index.html";
}

function toViewMenuHome() {
    window.location.href = "#exploreMenuSection";
}

function toOrderNow() {
    window.location.href = "orderNow.html";
}

function toContactUs() {
    window.location.href = "contactUs.html";
}

function toWatchVideo() {
    window.location.href = "https://youtu.be/sH-juTnjm-Y?feature=shared";
}

function toTwitter() {
    window.location.href = "https://www.twitter.com";
}

function toInstagram() {
    window.location.href = "https://www.instagram.com";
}

function toFacebook() {
    window.location.href = "https://www.facebook.com";
}

function sendEmail() {
    var name = document.getElementById('floatingInputName').value;
    var email = document.getElementById('floatingInputEmail').value;
    var phone = document.getElementById('floatingInputPhone').value;
    var message = document.getElementById('floatingTextarea').value;

    var body = "Name: " + name + "%0D%0A";
    body += "Email: " + email + "%0D%0A";
    body += "Phone: " + phone + "%0D%0A";
    body += "Message: " + message;

    var mailtoLink = "mailto:bhangalegunjan2@gmail.com" + "?subject=Contact%20Us%20Form%20Submission&body=" + body;

    window.location.href = mailtoLink;
}