
function comas(resultado,lista){
    let convertido=[]
    let contador=0
    for (x of lista){
       
        if(resultado.length==4){
            convertido.push(x)
           
            if (contador==0){
                convertido.push(",")
                
            }
            contador++
           
        }
        else if(resultado.length==5){
            convertido.push(x)
            if (contador==1){
                convertido.push(",")
                
            }
            contador++
           
        }

        else if(resultado.length==6){
            convertido.push(x)
            if (contador==2){
                convertido.push(",")
                
            }
            contador++
           
        }

        else if(resultado.length==7){
            convertido.push(x)
            if (contador==0){
                convertido.push(",")
                
            }
            

            else if(contador==3){
                convertido.push(",")
                
            }
            contador++

            
           
        }

        else if(resultado.length==8){
            convertido.push(x)
            if (contador==1){
                convertido.push(",")
                
            }
            

            else if(contador==4){
                convertido.push(",")
                
            }
            contador++

            
           
        }

        else{
            convertido.push(x)
        }
    }
 
    
    let string=""

    for(x of convertido){
        string=string+x
    }
    return string
    
}
class Tablas {
    constructor(tabla,cantidad){
        this.tabla=tabla;
        this.cantidad=cantidad;
    }


    operacion(){
        const contenedor=document.querySelector(".contenedor");
        const documentfragment=document.createDocumentFragment();
        let lista=[]
        for (let i=1; i<=this.cantidad; i++){
            let resultado=this.tabla*i;
            let resultado2=String(resultado)
            for (let x of resultado2){
                lista.push(x)
              
            }
            
            resultado=comas(resultado2,lista);
            lista=[]
            
            let resultadofinal=`${tabla}X${i}= ${resultado}`
            let div=document.createElement("DIV");
            if(resultadofinal.length>=10){
                div.classList.add("item-11",`item-${i}`);
            }
            div.classList.add("items",`item-${i}`);
            div.innerHTML=(`<h1>${resultadofinal}</h1`);
            documentfragment.appendChild(div);
        }

        contenedor.appendChild(documentfragment);
    }
}

let tabla=parseInt(prompt("Ingrese la Tabla a Multiplicar:"))
let cantidad=parseInt(prompt("Ingrese la Cantidad de veces a Multiplicar:"))

let objeto=new Tablas(tabla,cantidad);
objeto.operacion()