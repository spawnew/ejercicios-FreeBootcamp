let botonazo=document.getElementById('boton')
let cuerpo=document.getElementById('cuerpo')
let texto=document.getElementById('texto')
const colores = ["Red", "Green", "Blue", "Yellow", "Orange", "Violet","Black"];
function obtener(){
    let indice=Math.floor(Math.random() * colores.length)
return indice;
}

botonazo.addEventListener('click', cambiarfondo =>{
let elijo=obtener();
cuerpo.style.background=colores[elijo];
texto.innerHTML=colores[elijo];
texto.style.color=colores[elijo];



})
