//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here

    var dat = {
        userName : name,
        DMessage : message
    };

    database.push(dat);

    database.on("child_added", function (rowData){
        var row = rowData.val();
        var name = row.userName;
        var message = row.DMessage;
        var store = "<p>" + name + " : " + message + "</p>"
        $(".allMessages").append(store);
    })
}

