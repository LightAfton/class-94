
var firebaseConfig = {
    apiKey: "AIzaSyCLZquJeZ6uTDGPn96tlzU3nnbcSQiAKa4",
    authDomain: "kwitter-be3e9.firebaseapp.com",
    databaseURL: "https://kwitter-be3e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-be3e9",
    storageBucket: "kwitter-be3e9.appspot.com",
    messagingSenderId: "773532506944",
    appId: "1:773532506944:web:1131fa13cc31e67eaeb8a5"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 function add_user()
 {
     user_name=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"adding user"
     });
 }