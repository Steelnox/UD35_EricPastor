addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getLanguage('es');
}

function getLanguage(la){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/lang/" + la,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (lang) {
            console.log(JSON.stringify(lang))
        },
        error:function(error){
            console.log(error);
        }
    });
}