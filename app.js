$(document).ready(function () {

  // var personData = new Firebase("https://keyanna-s-portfolio.firebaseio.com/");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjO-MgX8nUlStNXJ4WK98quHnd8RKqPpk",
    authDomain: "keyanna-s-portfolio.firebaseapp.com",
    databaseURL: "https://keyanna-s-portfolio.firebaseio.com",
    projectId: "keyanna-s-portfolio",
    storageBucket: "keyanna-s-portfolio.appspot.com",
    messagingSenderId: "1044795276395"
  };
  firebase.initializeApp(config);


  const personData = firebase.database()

  $("#submitQuoteRequest").on("click", function (event) {
    event.preventDefault();
    const personName = $("#nameInput").val().trim();
    const personEmail = $("#emailInput").val().trim();
    const personMessage = $("#messageInput").val().trim();
    console.log(personName, personEmail, personMessage);

    let newPerson = {
      name: personName,
      email: personEmail,
      message: personMessage,
    }

    if(newPerson.email == "" || !newPerson.email.includes("@" && ".")){
      alert("Please provide a valid email address.")
    } else {
      personData.ref().push(newPerson);
      alert("Your request has been sent! Please allow for up to 48 hours to hear back.")
    }

    console.log(newPerson);


  })

  console.log("ready!");
});


