addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
    var ob=document.getElementById('boton1');
    ob.addEventListener('click',presionBoton,false);
}

function presionBoton(){
    alert('Boton Presionado!!!');
    getAll();
}

function getAll(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2",
        method: 'GET',
        dataType: 'json',
        // headers: {
        //     'Accept':'application/json',
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIyNmRlM2ViZi02NmQ0LTRmNGYtODM3Ny1lNmRhZmQ3YTIzNmEiLCJpYXQiOiIxNC8wMi8yMDIxIDE5OjI5OjI4IiwiSWQiOiIxIiwiRmlyc3ROYW1lIjoiRXJpYyIsIkxhc3ROYW1lIjoiUGFzdG9yIiwiVXNlck5hbWUiOiJTdGVlbG5veCIsIkVtYWlsIjoic3RlZWxub3gyMkBnbWFpbC5jb20iLCJleHAiOjE2MTM0MTczNjgsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.ESRriXGKNAnLgCoilrFia-bL3UnqdYiKZC04gfpwbSA',
        //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token , Authorization'
        // },
        contentType: 'application/x-www-form-urlencoded',
        success: function (all) {
            console.log(JSON.stringify(all));
        },
        error:function(error){
            console.log(error);
        }
    });
}