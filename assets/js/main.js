$(document).ready(function() {
    let id = "70"
    let direccion = "https://www.superheroapi.com/api/4564354093614559/"+id
    $.ajax({
        type:"GET",
        url: direccion,
        dataType:"json",
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.log("Error")
        },
    });
});