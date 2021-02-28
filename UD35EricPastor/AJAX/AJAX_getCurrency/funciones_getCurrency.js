addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getCurrency('cop');
}

function getCurrency(cur){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/currency/" + cur,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (currency) {
            console.log(JSON.stringify(currency))
        },
        error:function(error){
            console.log(error);
        }
    });
}