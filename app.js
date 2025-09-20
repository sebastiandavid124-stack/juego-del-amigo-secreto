let amigos = [];

function agregarAmigo(){
    nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("Porfavor, incerte un nombre valido");
    }else{
        amigos.push(nombreAmigo);
       
    }
limpiarCaja();
console.log(amigos);
actualizarLista(amigos);

}

function actualizarLista(nombres) {
  let lista = document.getElementById("listaAmigos");

  //vacia lo que haya antes
    lista.innerHTML="";

// recorrer array 
let longitudArray = nombres.length
for(let i = 0; i<longitudArray; i++){

    //crear elemento <li>(elemento item de la lista)
    let li = document.createElement("li");

    //agregar al elemento <li> el nombre de la lista 
    li.textContent = nombres[i];

    //agregar el <li> al <ul>(lista desordenada)

    lista.appendChild(li);
    }

}

function sortearAmigo(){
   
    if(amigos.length == ""){
         alert("Agregue un dato valido")

    }else if(amigos.length != ""){
        let indiceNombre = Math.floor(Math.random()*amigos.length)
         console.log(indiceNombre);
        
        mostrarNombre= document.getElementById('resultado')
        mostrarNombre.innerHTML=`Tú amigo secreto es: ¡${amigos[indiceNombre]}!`;
        lista =document.getElementById("listaAmigos");
        lista.innerHTML='';


    }

   } 
function limpiarCaja(){
    document.getElementById("amigo").value="";
}

