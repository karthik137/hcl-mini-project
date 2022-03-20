function registerUser() {

    //Get username and password from UI
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let mobileNumber = document.getElementById("mobileNumber").value;

    console.log(username);
    console.log(password);

    let userObject = {
        name: name,
        username: username,
        password: password,
        address: address,
        dob:dob,
        mobileNumber: mobileNumber
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:27018/userdb/users',
        data: JSON.stringify(userObject),
        success: function(data) { 
            alert("User created");
            //Redirect to list of users
            window.location.href("userDetails.html");
        },
        contentType: "application/json",
        dataType: 'json'
    });
}