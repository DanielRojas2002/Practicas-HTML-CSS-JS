let contry=document.getElementById("1")
let santiago=document.getElementById("2")
let mederos=document.getElementById("3")
let Try=document.querySelector(".try")

let varnombre="<small>El Nombre debe de tener Minimo 5 Caracteres Maximo 15 Caracteres</small>"
let varapellido="<small>El Apellido debe de tener Minimo 5 Caracteres Maximo 15 Caracteres</small>"
let varcorreo="<small>Debe de tener un Minimo de 10 Caracteres el Correo</small>"
let varcorreo2="<small>Debe de tener un Maximo de 40 Caracteres el Correo</small>"
let varcorreo3="<small>El Dominio debe de ser @uanl.edu.mx</small>"
let varcorrecto="<small>Solicitud Enviada Correctamente<small>"



function formulario(opcion){
    let documentfragment=document.createDocumentFragment();
    let div=document.createElement("DIV");
    let Forms=document.querySelector(".form")
    let forms=document.createElement("FORMS");
    let listaelementos=[]
   
    while (Forms.firstChild){
        Forms.removeChild(Forms.firstChild)

    }
    
    forms.classList.add("formulario-flex");
    let nombre=("<input type='text' id='nombre' class='input' required placeholder='Nombre'>");
    let apellido=("<input type='text' id='apellido' class='input' required placeholder='Apellidos'>");
    let correo=("<input type='email' id='correo' class='input' required placeholder='ejemplo@uanl.edu.mx'>");
    let op=(`<input type='text' class='input'  value='${opcion}' readonly>`);
    let botonenviar=("<input type='submit' value='Enviar' class='input btn' id='botonenviar'>");

    listaelementos.push(nombre)
    listaelementos.push(apellido)
    listaelementos.push(correo)
    listaelementos.push(op)
    listaelementos.push(botonenviar)

    for (x=0;x<5;x++){
        forms.innerHTML+=(listaelementos[x])

    }
    
    documentfragment.appendChild(forms)
    
    div.appendChild(documentfragment)

    Forms.appendChild(div)

    return listaelementos;
    

}



contry.addEventListener("click",(e)=>{
    e.preventDefault();
    let opcion="SUCURSAL CONTRY"
    let form=formulario(opcion);

    if (form){
        let botonenviar=document.getElementById("botonenviar")
        


        botonenviar.addEventListener("click",(e)=>{
            let div=document.createElement("DIV")
            e.preventDefault();
            let nombre=document.getElementById("nombre");
            let apellido=document.getElementById("apellido");
            let correo=document.getElementById("correo");
            let error=[]
            let Forms=document.querySelector(".form")
            
            let uanl=correo.value.includes("@uanl.edu.mx")
            
        
            if (nombre.value.length <= 5 || nombre.value.length >15 ){
                error[0]=true;
                error[1]=varnombre
                
            }
        
            else if (apellido.value.length <= 5 || apellido.value.length >15 ){
                error[0]=true;
                error[1]=varapellido
                
            }
        
            else if (correo.value.length < 10){
                error[0]=true;
                error[1]=varcorreo
            
            }
        
            else if (correo.value.length>40){
                error[0]=true;
                error[1]=varcorreo2
                
            }
            else if (uanl===false ){
                error[0]=true;
                error[1]=varcorreo3
            }

            else{
                error[0]=false
            }
            
            
            while (Try.firstChild){
                Try.removeChild(Try.firstChild)
        
            }

            if (error[0]===true){
               
            
                div.innerHTML=error[1];
                div.classList.remove("verde")
                div.classList.add("red");
                Try.appendChild(div)
                Forms.appendChild(Try)

                
            }
            else{
                div.classList.remove("red")
                div.classList.add("verde");
                div.innerHTML=varcorrecto;
                Try.appendChild(div)
                Forms.appendChild(Try)
                
            }
        })
        
        

    }
   
})

santiago.addEventListener("click",(e)=>{
    e.preventDefault();
    let opcion="SUCURSAL SANTIAGO"
    let form=formulario(opcion);

    if (form){
        let botonenviar=document.getElementById("botonenviar")
        botonenviar.addEventListener("click",(e)=>{
            let div=document.createElement("DIV")
            e.preventDefault();
            let nombre=document.getElementById("nombre");
            let apellido=document.getElementById("apellido");
            let correo=document.getElementById("correo");
            let error=[]
            let Forms=document.querySelector(".form")
            
            let uanl=correo.value.includes("@uanl.edu.mx")
            
        
            if (nombre.value.length <= 5 || nombre.value.length >15 ){
                error[0]=true;
                error[1]=varnombre
                
            }
        
            else if (apellido.value.length <= 5 || apellido.value.length >15 ){
                error[0]=true;
                error[1]=varapellido
                
            }
        
            else if (correo.value.length < 10){
                error[0]=true;
                error[1]=varcorreo
            
            }
        
            else if (correo.value.length>40){
                error[0]=true;
                error[1]=varcorreo2
                
            }
            else if (uanl===false ){
                error[0]=true;
                error[1]=varcorreo3
            }

            else{
                error[0]=false
            }
            
            while (Try.firstChild){
                Try.removeChild(Try.firstChild)
        
            }

            if (error[0]===true){
                div.innerHTML=error[1];
                div.classList.remove("verde")
                div.classList.add("red");
                Try.appendChild(div)
                Forms.appendChild(Try)
            }
            else{
                div.classList.remove("red")
                div.classList.add("verde");
                div.innerHTML=varcorrecto;
                Try.appendChild(div)
                Forms.appendChild(Try)
                
            }
        })
        
        

    }
})

mederos.addEventListener("click",(e)=>{
    e.preventDefault();
    let opcion="SUCURSAL MEDEROS"
    let form=formulario(opcion);

    if (form){
        let botonenviar=document.getElementById("botonenviar")
        botonenviar.addEventListener("click",(e)=>{
            let div=document.createElement("DIV")
            e.preventDefault();
            let nombre=document.getElementById("nombre");
            let apellido=document.getElementById("apellido");
            let correo=document.getElementById("correo");
            let error=[]
            let Forms=document.querySelector(".form")
            
            let uanl=correo.value.includes("@uanl.edu.mx")
            
        
            if (nombre.value.length <= 5 || nombre.value.length >15 ){
                error[0]=true;
                error[1]=varnombre
                
            }
        
            else if (apellido.value.length <= 5 || apellido.value.length >15 ){
                error[0]=true;
                error[1]=varapellido
                
            }
        
            else if (correo.value.length < 10){
                error[0]=true;
                error[1]=varcorreo
            
            }
        
            else if (correo.value.length>40){
                error[0]=true;
                error[1]=varcorreo2
                
            }
            else if (uanl===false ){
                error[0]=true;
                error[1]=varcorreo3
            }

            else{
                error[0]=false
            }
            
            while (Try.firstChild){
                Try.removeChild(Try.firstChild)
        
            }

            if (error[0]===true){
            
            
                div.innerHTML=error[1];
                div.classList.remove("verde")
                div.classList.add("red");
                Try.appendChild(div)
                Forms.appendChild(Try)

                
            }
            else{
                div.classList.remove("red")
                div.classList.add("verde");
                div.innerHTML=varcorrecto;
                Try.appendChild(div)
                Forms.appendChild(Try)
                
            }
        })
        
        

    }
})