
window.addEventListener('load', function () {
    console.log('el contenido se ha cargado');

    var aux = [];

    aux[0] = 'img/Foto 1.JPG';
    aux[1] = 'img/Foto 2.jpg';
    aux[2] = 'img/Foto 3.JPG';
    
    var IndiceAux = 0;

    function cambiarAux(){
        document.slider.src = aux[IndiceAux];
    
        if(IndiceAux < 2) {
            IndiceAux++
        } else {
            IndiceAux = 0;
        }

    }

    setInterval(cambiarAux, 1000);


})





function validarCampos(email,nombre,mensaje) {
	
    if ((nombre=="") || (mensaje=="")){
        alert('No se permiten campos vacios');
        
    }else{
        re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if(!re.exec(email)){
            alert('email no valido');
        }
        else alert('email valido');
        }




}


var objetoJson= {"Python":200,"Java":30,"JavaScript":45};
var objetoJsonSTR = JSON.stringify(objetoJson);

window.onload = function(){
    document.getElementById("primero").value = 31;
    document.getElementById("segundo").value = 32;
    document.getElementById("tercero").value = 33;
    };




