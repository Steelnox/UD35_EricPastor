addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getCapital('tallinn');
}

function getCapital(cap){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/capital/" + cap,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (capital) {
            console.log(JSON.stringify(capital))
        },
        error:function(error){
            console.log(error);
        }
    });
}