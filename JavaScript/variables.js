

//Definicion de Variables
//Constantes y variables
// const pi=3.1416
//let nombre="daniel"
//let nombre=prompt("Ingrese su nombre")
//document.write(nombre)


//alert("a")

//Concatenacion

//let nombre=prompt("Ingrese su nombre:")
//const frase=" ¿COMO ESTAS?"

//frasefinal=nombre+frase

//document.write(frasefinal)

//let numero1=10;
//let numero2=20;

//concatenacion=""+numero1+numero2

//suma=numero1+numero2

//document.write(concatenacion)
//document.write(suma)

//nombre="daniel";
//frase=`soy ${nombre} y me gusta nadar`

//document.write(frase)


//Comparativos
//numero1=10;
//numero2="10";
// == solo checa si es igual no le importa que tipo de dato sea
// === le importa que se igual y el tipo de dato tambien
//document.write(numero1===numero2); 


//CONDICIONAL

// let numero1=prompt("Ingres su numero 1:")
// let numero2=prompt("Ingres su numero 2:")
// if(numero1<numero2){
//     let frase=` El ${numero1} es menor a ${numero2}`;
//     alert(frase)

// }

// else if(numero1>numero2){
//     let frase=` El ${numero1} es mayor a ${numero2}`;
//     alert(frase)
// }

// else{
//     let frase=` El ${numero1} es igual al ${numero2}`;
//     alert(frase)
// }


//ARRAYS


// let array = ["texto",10,10.5,true,false];

// document.write(array[2])

// array (diccionario)
//let alumno={nombre:["daniel","jose"],apellido:["rojas","garza"]}

// document.write(alumno["nombre"][1])


// let condicional=0;

// while (condicional<10){
//     condicional++;
//     document.write(condicional+"<br>")
// }


// let condicional=0;

// do{
//     condicional++;
//     document.write(condicional+"<br>")
// }

// while(condicional<10)


// for(let i=0; i<10; i++){

//     document.write(i)
// }


let datos=["daniel","dato2","jose","etc"]

// for (elemento in datos){
//     document.write(elemento+"<br>")
// }

// for (elemento in datos){
//     document.write(datos[elemento]+"<br>")
// }


// for (elemento of datos){
//     document.write(elemento+"<br>")
// }


// darle nombre a un bloqu

// nombrefor:
// for (dato of datos){
//     if (dato==="jose"){
//         continue nombrefor ;
//     }
//     document.write(dato+"<br>")
// }

//funciones


// function saludar(){
//     let nombre=prompt("Como se llama:")
//     document.write("Hola Bienvenido"+nombre)
// }

// saludar();


//funcion con parametros y return

// function Suma(numero1,numero2){
//     let suma=numero1+numero2;
//     return suma;
// }

// sumatoria=Suma(10,20);
// document.write(sumatoria);


// Otra manera de hacer Funciones

// const Suma= function(numero1,numero2){
//     let suma=numero1+numero2;
//     return suma;

// }
// sumatoria=Suma(10,20);
// document.write(sumatoria);

// funciones flecha

// const saludar=(nombre)=>{
//     alert("hola "+nombre)
// }

// saludar("Daniel")
// saludar("Jose")

// desarrolla una funcio que te pida la cantidad de alumnos en el
//salon y que pe pidas sus nombres y su edad y despues sacar 
//el promedio del salon

// const promedio=(cantidad)=>{
//     let listanombre=[];
//     let listaedad=[];
//     let sumatoria=0;
    
//     for (i=1; cantidad>=i; i++){
//         let nombre=prompt("Ingrese el nombre del Alumno "+i);
//         let edad=prompt("Ingrese la edad de "+nombre);
//         listanombre.push(nombre);
//         listaedad.push(edad);
        

//     }

//     for (elemento of listaedad){
//         sumatoria=parseInt(sumatoria)+parseInt(elemento);
//     }
    
    
//     promediofinal=sumatoria/cantidad;
//     return promediofinal;
    

// }
// let cantidad=prompt("Cuantos alumnos son:")
// let dato=promedio(cantidad)
// document.write("Este es el promedio del grupo de la edad:"+dato)