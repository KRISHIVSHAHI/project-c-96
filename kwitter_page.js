//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBPcObR33DH1T1eTCXsTLD-nQHNbsCcYJY",
      authDomain: "kwitter2-a5a6b.firebaseapp.com",
      databaseURL:"https://kwitter2-a5a6b-default-rtdb.firebaseio.com/",
      projectId: "kwitter2-a5a6b",
      storageBucket: "kwitter2-a5a6b.appspot.com",
      messagingSenderId: "75325708456",
      appId: "1:75325708456:web:141712644074508b2c8a9d",
      measurementId: "G-2GZ9T47HPT"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0

      });
      document.getElementById("msg").value=" ";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }

getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

