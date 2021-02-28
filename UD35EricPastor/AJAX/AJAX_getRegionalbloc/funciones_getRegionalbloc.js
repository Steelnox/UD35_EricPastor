addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getRegionalBloc('eu');
}

function getRegionalBloc(regBloc){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/regionalbloc/" + regBloc,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (regionalbloc) {
            console.log(JSON.stringify(regionalbloc))
        },
        error:function(error){
            console.log(error);
        }
    });
}