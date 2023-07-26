const firebaseConfig = {
  apiKey: "AIzaSyD0fU35Lzwr7UzzMJZNtoku0oDPnIUhmfE",
  authDomain: "kwitter-49fbe.firebaseapp.com",
  databaseURL: "https://kwitter-49fbe-default-rtdb.firebaseio.com",
  projectId: "kwitter-49fbe",
  storageBucket: "kwitter-49fbe.appspot.com",
  messagingSenderId: "1011451770456",
  appId: "1:1011451770456:web:24877335ced02ef7bf7c2d",
  measurementId: "G-QZLE2X16RF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
