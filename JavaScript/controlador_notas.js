
let boton=document.getElementById("boton-generar");
let botonReinciar=document.getElementById("boton-reiniciar")




let documentfragment=document.createDocumentFragment();


let div=document.createElement("DIV");
let resultado=document.querySelector(".Reporte");
let datos=document.querySelector(".datos")
let flex=document.querySelector(".flex-4");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let valido=validarcampos();
    
    
 
   
    if (valido[0]==true){
        
        div.innerHTML=(valido[1])
        div.classList.remove("verde")
        div.classList.add("red");

        resultado.appendChild(div);
    }

    else{
        let html=(`<p>Maestro:${valido[1]}</p>
        <p>Cantidad de Alumnos:${valido[2]}</p>
        <p>Cantidad de Notas:${valido[3]}</p>`)
        div.innerHTML=(html)
        div.classList.remove("red")
        div.classList.add("verde")
        resultado.appendChild(div);

        let maestro=valido[1];
        let alumnos=valido[2];
        let notas=valido[3];
        flex.removeChild(boton);
        crearinputs(maestro,alumnos,notas);
        


    }
})

botonReinciar.addEventListener("click",(e)=>{
    let resultado=document.querySelector(".Reporte");
    let verde=document.querySelector(".verde")
    let flex=document.querySelector(".flex-4");
    let contenedor_btn_calcular=document.querySelector(".contenedor-boton-calcular")
    
    try{
        resultado.removeChild(verde)
        

        
        while (datos.firstChild){
            datos.removeChild(datos.firstChild)

        }

        while (contenedor_btn_calcular.firstChild){
            contenedor_btn_calcular.removeChild(contenedor_btn_calcular.firstChild)
        }
        	
        
        flex.appendChild(boton);
    }
    catch{
        
    }
    


})

const validarcampos=()=>{
    let maestro=document.getElementById("maestro");
    let cantidadAlumnos=document.getElementById("cantidad_alumno");
    let cantidadNotas=document.getElementById("cantidad_notas");
    
    let error=[]
    let cantidadalumno=String(cantidadAlumnos.value);
    let cantidadnotas=String(cantidadNotas.value);
    
    if (maestro.value.length<=1 || maestro.value.length>=15){
        error[0]=true;
        error[1]="El Maestro debe contener entre 1 y 15 caracteres como nombre";
        return error
    }

    else if(cantidadalumno.length<1){
        error[0]=true;
        error[1]="Ingrese la Cantidad de Alumnos";
        return error
    }

    else if(cantidadnotas.length<1){
        error[0]=true;
        error[1]="Ingrese la Cantidad de Notas ";
        return error
    }
    error[0]=false
    error[1]=maestro.value
    error[2]=cantidadAlumnos.value
    error[3]=cantidadNotas.value

    return error
}

const crearinputs=(maestro,alumnos,notas)=>{
    let datos=document.querySelector(".datos")
    let contenedor_btn_calcular=document.querySelector(".contenedor-boton-calcular")
    

    for (let i=1; i<=alumnos;i++){
        let div2=document.createElement("DIV")
        let html2=[];
        let html=(`<input  class='inputs'type='text' id='Alumno-${i}' placeholder='Nombre del Alumno ${i}:' min='1' required>`)
        for (let x=1; x<=notas; x++){
            
            
            
            html2[x-1]=(`<input  class='inputs'type='number' id='Alumno${i}-nota-${x}' placeholder='Nota ${x}:' min='1'  max='99' required>`)
            
        }
        div2.innerHTML=(html+html2)
        
        
            
        div2.classList.add("div-input",`ALUMNO-${i}`);
        
        documentfragment.appendChild(div2)
       
        
        
    }   
    contenedor_btn_calcular.innerHTML=(" <button class='btn' type='submit' id='calcular-promedios'>Calcular</button>")
    
    datos.appendChild(documentfragment)
    let botonCalcular=document.getElementById("calcular-promedios")

    if (botonCalcular){
        botonCalcular.addEventListener("click",()=>{
            let abuelo=document.querySelector(".datos");
            let padre=abuelo.children;
            let listaclases=[]
            let listaCLASES=[]
            let listaidsgeneral=[]
            let listanombres=[]
            let cantidad=0;
            
            for (x of padre){
                listaclases.push(x)
            }

            for (z in listaclases){
                cantidad+=1;
            }
            
            for (let x=1; x<=cantidad; x++){
                let alumno=`ALUMNO-${x}`
                listaCLASES.push(alumno)
            }
            valido=validarcampos()
            let contador2=1
            for( elemento of listaCLASES){
                let clase=document.querySelector(`.${elemento}`);
                let hijos=clase.children;
                
                // let valor=hijos[contador2];
                
                let notas=valido[3]
                
                let listaidgrupal=[]


                
                for (x=1; x<=notas; x++){
                    // console.log(hijos[x].id)
                    listaidgrupal.push(hijos[x].id)
                    
                    
                }
                listaidsgeneral.push(listaidgrupal);
                contador2++
                //ME QUEDE AQUI YA TENGO TODOS LOS IDS DE LOS INPUTS 
               
                // let maestro=document.getElementById("maestro");
                // let cantidadAlumnos=document.getElementById("cantidad_alumno");
                // let cantidadNotas=document.getElementById("cantidad_notas");
            }
            let nombre=valido[2]
            
            for (x=1;x<=nombre;x++){
                listanombres.push(`Alumno-${x}`)
                

            }
            //YA TENGO LOS ID POR ALUMNO TENGO UNA LISTA DE LISTAS
            
            let listavaloreslimpios=validarinputs(listaidsgeneral,listanombres);
            console.log(listavaloreslimpios);
            
        })
    }
}


const validarinputs=(listaidsgeneral,listanombres)=>{
    let listanombreslim=[]
    let listavalores=[]
    let listaglobal=[]
    let nombretodos;
    let valoretodos;
    let listatrue=[]
    
    
    for (x of listanombres){
        validonom=[];
        let nombre=document.getElementById(`${x}`)
        let nombrenumero=parseInt(nombre.value)

        if (nombrenumero>=0){

            nombretodos=(false);
            listatrue.push(nombretodos)
        }
        
        else{
            let valido2=String(nombre.value);
        
            if (valido2.length>0){
                listanombreslim.push(valido2);
                nombretodos=(true)
                listatrue.push(nombretodos)
            }
           
        }
        
    }
   
    for (x of listaidsgeneral){

        for (y of x){
            validovalores=[];
            let claseinput=document.getElementById(`${y}`);
            let inputint=parseInt(claseinput.value);
            let inputstr=String(inputint);
            
            if (inputstr.length>0){

                if (inputint>=1 && inputint<=100){
                    listavalores.push(inputint);
                    valoretodos=(true)
                    listatrue.push(valoretodos)
                    
                }

                else{
                    valoretodos=(false)
                    listatrue.push(valoretodos)
                   
                }
            }

            else{
                valoretodos=(false)
                listatrue.push(valoretodos)
            }

            
        }
        
        

        
    }

    let contadortrues=0;
    let contadorfalses=0;
    for ( x of listatrue){
        if (x===true){
            contadortrues++
        }

        else if (x===false) {
            contadorfalses++
        }

    }

    if (contadorfalses==0){
        listaglobal.push(listanombreslim)
        listaglobal.push(true);

    }

    contadortrues=0;
    contadorfalses=0;
    for ( x of listatrue){
        if (x===true){
            contadortrues++
        }

        else if (x===false) {
            contadorfalses++
        }

    }

    if (contadorfalses==0){
        listaglobal.push(listavalores)
        listaglobal.push(true);

    }

    return listaglobal
}




