
let  lista=document.getElementById('lista')
let botonazo2=document.getElementById('botonazo2')
let input=document.getElementById('input')
let botonazo3=document.getElementById('botonazo3')

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      agregar();
    }
  });
function agregar(){
    if(input.value){
        let texto=document.createElement('p');
     texto.innerHTML=input.value;
     lista.appendChild(texto);
     input.value=""
     let borrar=document.createElement('i')
     borrar.classList.add('bi', 'bi-clipboard-minus');
     borrar.addEventListener('click', ()=>{
        lista.removeChild(texto);
     })
     texto.appendChild(borrar)
    } 
    else {
        alert("no escribiste nada ")
    }
      
}



botonazo2.addEventListener('click',  agregar )

botonazo3.addEventListener('click',() =>{
       lista.remove();




})