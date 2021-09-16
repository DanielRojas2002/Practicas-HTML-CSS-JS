
class Rango {
    constructor(numero0,numero1){
        this.numero0=numero0;
        this.numero1=numero1;
    }

    comprobacion(){
        let listanumeros=[];
        let contadornumeros=1;
        if(this.numero0>this.numero1){
            alert("No se puede eso :(")
        }

        else{
            
            for (let i = this.numero0; i <= this.numero1; i++) {
                listanumeros.push(i)
            }
            return listanumeros;
        }
    }

    creaciondivs(listanumeros){
        const documentfragment=document.createDocumentFragment();
        const contendorprincipal=document.querySelector(".contenedor-numeros");
        if (listanumeros){
            for (let x of listanumeros){
                let div=document.createElement("DIV");
                div.classList.add(`Item-${x}`,'flex-item');
                div.innerHTML=(`<h2>${x}</h2> `);
                documentfragment.appendChild(div);

            }
            contendorprincipal.appendChild(documentfragment);
        }
    }
}


let numero0=prompt("Dime el numero menor:");
let numero1=prompt("Dime el numero mayor:");

let objeto=new Rango(numero0,numero1);
lista=objeto.comprobacion();


if (lista){
    objeto.creaciondivs(lista)
}
