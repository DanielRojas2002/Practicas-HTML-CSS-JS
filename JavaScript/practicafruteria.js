function Reporte(opcion,reporte){
    let listaopciones=["Platanos","Manzanas","Total"];
    let contador=0;
    if (opcion===5){
        for (elemento of reporte){
            
            let div=document.createElement("DIV");
            div.classList.add("Reporte");
            div.innerHTML=(`:${listaopciones[contador]}  ${elemento}`)
            documentFragmentR.appendChild(div)
            contador++
        }
    }
    else {
        if(opcion===1){
            dato="Platano"
        }
        else{
            dato="Manzana"
        }
       let div=document.createElement("DIV");
       div.classList.add("Reporte");
       div.innerHTML=(`:${dato}=${reporte}`)
       documentFragmentR.appendChild(div)
        

    }
    
    
    contenedorEncabezado.appendChild(documentFragmentR);
}


function templatefruta(opcionfruta){
    
    
    if (opcionfruta==1){
        img=" <img src='../static/img/platano.jpg' alt='imagen'>";
        return [img];
    }

    else if (opcionfruta==2){
        img=" <img src='../static/img/manzana.jpg' alt='imagen'>";
        return [img];
    }
   
}



function tipoycantidad(cantidad,tipo){
    for (i=1; i<=cantidad; i++){
        if(tipo===1){
            
            let fruta=templatefruta(tipo);
            let div=document.createElement("DIV");
            div.classList.add(`Item-P${i}`,"flex-item");
            div.innerHTML=(fruta[0]);
            documentFragmentP.appendChild(div);
        }

        else if (tipo===2){
            
            let fruta=templatefruta(tipo);
            let div=document.createElement("DIV");
            div.classList.add(`Item-M${i}`,"flex-item");
            div.innerHTML=(fruta[0]);
            documentFragmentM.appendChild(div);
        }
    }
    
    Reporte(tipo,cantidad);
  
    contenedorManzana.appendChild(documentFragmentM);
    contenedorPlatano.appendChild(documentFragmentP);
}
function AmbasFrutas(){
    if (tipo===3){
        let platanos=parseInt(prompt("Cuantos Platanos:"));
        let manzanas=parseInt(prompt("Cuantas Manzanas:"));
        const imagenplatano=" <img src='../static/img/platano.jpg' alt='imagen'>";
        const imagenmanzana=" <img src='../static/img/manzana.jpg' alt='imagen'>";
        let suma=platanos+manzanas;
        let reporte=[platanos,manzanas,suma];
        for (i=1; i<=platanos; i++){

            let div=document.createElement("DIV");
            div.classList.add("flex-item");
            div.innerHTML=(imagenplatano)
            documentFragmentA.appendChild(div);
        }

        for (i=1; i<=manzanas; i++){

            let div=document.createElement("DIV");
            div.classList.add("flex-item");
            div.innerHTML=(imagenmanzana)
            documentFragmentA.appendChild(div);
        }


        let opcion=5;
        Reporte(opcion,reporte); 
        
    }
    
    contenedorAmbos.appendChild(documentFragmentA);

}




let documentFragmentM=document.createDocumentFragment();
let documentFragmentP=document.createDocumentFragment();
let documentFragmentA=document.createDocumentFragment();
let documentFragmentR=document.createDocumentFragment();

const contenedorManzana=document.querySelector(".contenedor-manzana");
const contenedorPlatano=document.querySelector(".contenedor-platano");
const contenedorAmbos=document.querySelector(".ambos");
const contenedorEncabezado=document.querySelector(".encabezado");

let tipo=parseInt(prompt("1=Plantano, 2=Manzana 3=Ambos"));
if (tipo===3){
    AmbasFrutas();
}

else {
    let cantidad=parseInt(prompt("Cuantas Frutas quieres:"));
    tipoycantidad(cantidad,tipo);
}
