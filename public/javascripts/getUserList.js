$(document).ready(function(){

    function displayUserList(){
        console.log("Inside displayUsers");
        var dataSets = [];
        var userList = [];
        $.ajax({
            dataType: "json",
            url: "http://localhost:27018/userdb/users",
            global: false,
            type: 'GET',
            async: false, 
            success: function(response) {
                    for(var index=0; index < response.length; index++){
                        
                        var item = response[index];

                        var name = item.name;
                        var username = item.username;
                        var address = item.address;
                        var dob = item.dob;
                        var mobileNumber = item.mobileNumber;

                        userList.push(name, username,address, dob ,mobileNumber);
                        dataSets.push(userList);
                        userList = [];

                    }
                    $('#userTable').DataTable( {
                        data: dataSets,
                        destroy: true,
                        searching: true,
                        columns: [
                            {title: "name" },
                            {title: "username"},
                            {title: "address"},
                            {title: "dob"},
                            {title: "mobileNumber"}

                        ]
                    });
            }
        });
    }

    displayUserList();

})