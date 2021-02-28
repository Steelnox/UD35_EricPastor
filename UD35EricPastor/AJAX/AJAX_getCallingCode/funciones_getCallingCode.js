addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getCallingCode('372');
}

function getCallingCode(cc1){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/callingcode/" + cc1,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (callcode) {
            console.log(JSON.stringify(callcode))
        },
        error:function(error){
            console.log(error);
        }
    });
}