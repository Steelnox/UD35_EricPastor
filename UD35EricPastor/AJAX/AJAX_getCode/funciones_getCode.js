addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getCode('co');
}

function getCode(co1){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha/" + co1,
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