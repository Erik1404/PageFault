var config = {
    apiKey: "AIzaSyDI57OFdoW_7G0iYwJ_Tvv-l__3jfziMa0",
    authDomain: "xedemo-682af.firebaseapp.com",
    databaseURL: "https://xedemo-682af.firebaseio.com",
    projectId: "xedemo-682af",
    storageBucket: "xedemo-682af.appspot.com",
    messagingSenderId: "678151457017",
    appId: "1:678151457017:web:4988cdf030c02a57d8ba28"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('Xedemo');
$('#contactForm').submit(function(e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        speed: $('.speed').val(30),
        distance: $('.distance').val(50),
        time: $('.time').val(60),

    });

    $('.success-message').show();

    $('#contactForm')[0].reset();
});