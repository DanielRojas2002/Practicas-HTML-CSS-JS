const contenedor=document.querySelector(".contenedor-flex");


function crearcajitas(nombre,modelo,precio){
    
    nombre= `<h2>${nombre}</h2> `;
    modelo= `<h3>${modelo}</h3>`;
    precio= `<p>${precio}</p>`;
    boton="<a href='#'>ELEGIR</a>"
    return [nombre,modelo,precio,boton];
}

let documentfragment=document.createDocumentFragment();

function funcionamiento(veces){
    for (i=1; i<=veces; i++){

        let modelorandom=Math.round(Math.random()*1000);
        let preciorandom=Math.round(Math.random()*10+20);
        let llave=crearcajitas(`Llave${i}`,`Modelo ${modelorandom}`,`Precio $${preciorandom}`);
        let div=document.createElement("DIV");
        div.classList.add(`item-${i}`,'flex-item');
        div.innerHTML=llave[0]+llave[1]+llave[2]+llave[3]
        documentfragment.appendChild(div);
    }
    
    contenedor.appendChild(documentfragment);
}

let veces=prompt("Dime cuantas llaves quieres:")

funcionamiento(veces);
