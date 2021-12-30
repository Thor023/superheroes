$(document).ready(function() {
    $("button").on("click", function (e){
        e.preventDefault();
        //Obtener valor de ID
        let id = $("#formulario").val();
        //Confirmar y unir URL
        let direccion = `https://www.superheroapi.com/api.php/4564354093614559/${id}`;
        //consumir API
        $.ajax({
            type:"GET",
            url: direccion,
            dataType:"json",
            success: function(datosApi) {
                console.log(datosApi, datosApi.image.url);;
                console.log(datosApi.name, datosApi.connections, datosApi.work.occupation, datosApi.appearance.weight, datosApi.biography);
                $('#resultado').html(`<h3> El Super encontrado es: </h3>`);
                $("#avatar").html(`<img src="${datosApi.image.url}">`);
                $(".nombre").html(datosApi.name);
                $('#infosuper').html(`
                Nombre: ${datosApi.name} <br>
                Conexiones: ${datosApi.connections['group-affiliation']} <br>
                Parientes: ${datosApi.connections.relatives}<br>
                Ocupacion:${datosApi.work.occupation}<br>
                Primera Aparición:${datosApi.biography['first-appearance']}<br>
                Peso:${datosApi.appearance.weight[1]}<br>
                Alias:${datosApi.biography.aliases}<br>
                            
                `);
            },
            error: function(error) {
                    console.log("Error")
            },
        });
        console.log(id)
    })
});