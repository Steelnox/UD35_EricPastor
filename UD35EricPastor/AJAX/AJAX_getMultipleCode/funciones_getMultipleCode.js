addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getMultipleCode('co','no','ee');
}

function getMultipleCode(co1,co2,co3){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha?codes=" + co1 + ";" + co2 + ";" + co3,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (code) {
            console.log(JSON.stringify(code))
        },
        error:function(error){
            console.log(error);
        }
    });
}