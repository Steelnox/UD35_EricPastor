addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    getAllFields('name','capital','currencies');
}

function getAllFields(af1,af2,af3){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/all?fields=" + af1 + ";" + af2 + ";" + af3,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: function (allfields) {
            console.log(JSON.stringify(allfields))
        },
        error:function(error){
            console.log(error);
        }
    });
}