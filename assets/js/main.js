$(document).ready(function() {
    
    $("#button-addon1").on("click", function (){
        //Obtener valor de ID
        let id = $("#formulario").val();
        if (id>0 && id<732){
        //consumir API
            $.ajax({
                type:"GET",
                url: `https://www.superheroapi.com/api.php/4564354093614559/${id}`,
                dataType:"json",
                success: function(datosApi) {
                    console.log(datosApi, datosApi.image.url);;
                    console.log(datosApi.name, datosApi.connections, datosApi.work.occupation, datosApi.appearance.weight, datosApi.biography);
                    $('#resultado').html(`<h3> El Super encontrado es: </h3>`);
                    $("#avatar").html(`<img src="${datosApi.image.url}">`);
                    $('#infosuper').html(`
                    Nombre: ${datosApi.name} <br>
                    Nombre Real:${datosApi.biography['full-name']}<br>
                    Conexiones: ${datosApi.connections['group-affiliation']} <br>
                    Parientes: ${datosApi.connections.relatives}<br>
                    Ocupacion:${datosApi.work.occupation}<br>
                    Primera Aparición:${datosApi.biography['first-appearance']}<br>
                    Peso:${datosApi.appearance.weight[1]}<br>
                    Alias:${datosApi.biography.aliases}<br>`)
                    var options = {
                        title: {
                            text: "Estadisticas del Super:"
                        },
                        animationEnabled: true,
                        data: [{
                            type: "pie",
                            startAngle: 40,
                            toolTipContent: "<b>{label}</b>: {y}",
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabelFontSize: 16,
                            indexLabel: "{label} - {y}",
                            dataPoints: [
                                { y: datosApi.powerstats.combat, label: "Combate" },
                                { y: datosApi.powerstats.durability, label: "Durabilidad" },
                                { y: datosApi.powerstats.intelligence, label: "Inteligencia" },
                                { y: datosApi.powerstats.power, label: "Poder" },
                                { y: datosApi.powerstats.speed, label: "Velocidad" },
                                { y: datosApi.powerstats.combat, strength: "Fuerza" },
                            ]
                        }]
                    };
                    $("#grafico").CanvasJSChart(options);
                },
                error: function(error) {
                    $('#resultado').html("No se ha podido encontrar tu Super");
                }
            });
            
        }
        else{
            alert('Por favor ingrese un numero entre 1 y 731')
        }
    });
});