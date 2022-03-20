

function adminLogin() {

    //Get username and password from UI
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // console.log(username);
    // console.log(password);

    //Query from server
    $.get( "http://localhost:27018/userdb/admin", function( data ) {

        //Check username and password
        if(data[0].userId === username && data[0].password === password){
            //redirect to home page
            alert("Success");
            window.location.href = "/home.html";
        }else{
            alert("Invalid username and password");
        }
      });
}