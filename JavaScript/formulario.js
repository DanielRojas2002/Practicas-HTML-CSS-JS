


let nombre=document.getElementById("nombre");
let correo=document.getElementById("correo");
let resultado=document.querySelector(".resultado")
let boton=document.getElementById("boton");
let div=document.createElement("P");


boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error=validarCampos();
   
    if (error[0]===true){
       
        div.innerHTML=error[1];
        div.classList.remove("verde")
        div.classList.add("red");
        resultado.appendChild(div);
    }
    else{
        div.classList.remove("red")
        div.classList.add("verde");
        div.innerHTML="Solicitud Enviada Correctamente";
        resultado.appendChild(div);
    }
})

const validarCampos = ()=>{
    let error=[]
    
    let uanl=correo.value.includes("@uanl.edu.mx")
   
    if (nombre.value.length <= 5 || nombre.value.length >15 ){
        error[0]=true;
        error[1]="Minimo 5 Caracteres Maximo 15 Caracteres"
      
       
    
        return error 
    }

    if (correo.value.length < 10){
        error[0]=true;
        error[1]="Debe de tener un Minimo de 10 Caracteres el Correo"
      
        
        return error
    }

    else if (correo.value.length>40){
        error[0]=true;
        error[1]="Debe de tener un Maximo de 40 Caracteres el Correo"
      
        
        return error
    }
    else if (uanl===false ){
        error[0]=true;
        error[1]="El Dominio debe de ser @uanl.edu.mx"
      
        
        return error
    } 
       
       
       

    
    error[0]=false
    return error


}