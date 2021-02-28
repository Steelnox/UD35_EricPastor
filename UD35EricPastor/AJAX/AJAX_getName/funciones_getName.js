addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getName('Spain');
}

function getName(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + nom,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (name) {
            console.log(JSON.stringify(name));
        },
        error:function(error){
            console.log(error);
        }
    });
}