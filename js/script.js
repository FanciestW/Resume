$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB9WoQ_uYkFmUFB1c_6ihLwl8jDCQPRJtM",
        authDomain: "contactme-313af.firebaseapp.com",
        databaseURL: "https://contactme-313af.firebaseio.com",
        storageBucket: "contactme-313af.appspot.com",
        messagingSenderId: "1096291680692"
    };
    firebase.initializeApp(config);

    $('.modal').modal();
    $(".button-collapse").sideNav();
    $('.toTop').hide();
	$('a[href*="#"]:not([href="#modal1"])').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;
    });
});

$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < 500) {
        //$(".navbar-fixed").fadeIn(300);
        $(".toTop").fadeOut(200);
    } else {
        //$(".navbar-fixed").fadeOut(300);
        $(".toTop").fadeIn(200);
    }
});

function clearForm(){
    $('#first_name').val("");
    $('#last_name').val("");
    $('#email').val("");
    $('#message').val("");
}

function sendMsg(){
    var database = firebase.database().ref('messages');
    var newMsg = database.push();
    var fName = document.getElementById('first_name').value;
    var lName = document.getElementById('last_name').value;
    var em = document.getElementById('email').value;
    var msg = document.getElementById('message').value;
    newMsg.set({
        firstName: fName,
        lastName: lName,
        email: em,
        message: msg,
        fromSite: "Resume"
    });
    clearForm();
}
