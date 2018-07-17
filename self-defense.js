var config = {
    apiKey: "AIzaSyCgaX4qhJhjE4wxFW0xGrb3K9zgdasd5wI",
    authDomain: "project1-575d7.firebaseapp.com",
    databaseURL: "https://project1-575d7.firebaseio.com",
    projectId: "project1-575d7",
    storageBucket: "project1-575d7.appspot.com",
    messagingSenderId: "1048705115345"
};
firebase.initializeApp(config);


var database = firebase.database();

$("#submit-form-btn").on("click", function (event) {
    event.preventDefault();

    var firstName = $("#firstName-input").val().trim();
    var lastName = $("#lastName-input").val().trim();
    var email = $("#email-input").val().trim();

    var newPerson = {
        fullName: firstName + lastName,
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    database.ref().push(newPerson);

    $("#firstName-input").val("");
    $("#lastName-input").val("");
    $("#email-input").val("");
});



$(document).ready(function () {


    $("#formregister").on("click", function (event) {
        $("#signupform").toggle('slow');
    });

    $("#cancel").on("click", function (event) {
        $("#signupform").toggle('slow');
    });

    // Capture Button Click
    $("#formsubmit").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text boxes
        firstName = $("#first_name").val();
        lastName = $("#last_name").val();
        email = $("#email").val();

        if ($.trim($("#first_name").val()) === "" || $.trim($("#last_name").val()) === "" || $.trim($("#email").val()) === "") {
            alert('You did not fill out one or more of the fields');
            return false;
        }
        var form = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        database.ref().push(form);

        $("#first_name").val('');
        $("#last_name").val('');
        $("#email").val('');

    });

});

//for maps
/******************************* */
//for the maps



/******************************* */
$("#Taekwondo").on("click", function (event) {
    console.log("hi");
    //var queryString = 'taekwondo';
    location.href = "page1.html?term=taekwondo";
});
$("#Judo").on("click", function (event) {
    console.log("hi");
    location.href = "page1.html?term=judo";
});
$("#Karate").on("click", function (event) {
    console.log("hi");
    location.href = "page1.html?term=karate";
});
$("#KravMaga").on("click", function (event) {
    console.log("hi");
    location.href = "page1.html?term=kravmaga";
});
$("#MuayThai").on("click", function (event) {
    console.log("hi");
    location.href = "page1.html?term=muaythai";
});
$("#Brazilian-Jiu-Jitsu").on("click", function (event) {
    console.log("hi");
    location.href = "page1.html?term=brazilian-jiu-jitzu";
});




document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });