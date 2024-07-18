
let  lista=document.getElementById('lista')
let botonazo2=document.getElementById('botonazo2')
let input=document.getElementById('input')






botonazo2.addEventListener('click',agregar =>{
     let texto=document.createElement('p');
     texto.innerHTML=input.value;
     lista.appendChild(texto);
     input.value="";
     
     
      
})

