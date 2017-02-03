$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA42_fof6OAAUz5YuDHRLIt9hYAvyRjsLA",
        authDomain: "fanciestwghpages.firebaseapp.com",
        databaseURL: "https://fanciestwghpages.firebaseio.com",
        storageBucket: "fanciestwghpages.appspot.com",
        messagingSenderId: "138288406567"
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
    var today = new Date();
    var todayStr = today.toString();
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
        fromSite: "Resume Site",
        date: todayStr
    });
    clearForm();
}