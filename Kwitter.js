function adduser(){
    user_mane=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_mane);
    window.location="kwitter_room.html";
    }