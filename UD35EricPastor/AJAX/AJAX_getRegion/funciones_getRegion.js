addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getRegion('europe');
}

function getRegion(reg){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/region/" + reg,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (region) {
            console.log(JSON.stringify(region))
        },
        error:function(error){
            console.log(error);
        }
    });
}