

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


// let datos=["daniel","dato2","jose","etc"]

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


//Crea una calculadroa con funciones 
// const conoceroperacion=(ciclo)=>{
//     if (ciclo==="SI" || ciclo==="si"){
//         let numero1=parseInt(prompt("Ingrese su primer numero: "));
//         let numero2=parseInt(prompt("Ingrese su segundo numero: "));
//         let operacion=0;
//         let cadena="";
//         let opcion=parseInt(prompt("Que operacion desea hacer: 1=SUMA 2=RESTA 3=MULTIPLICACION 4=DIVISION:"));

//         if(opcion===1){
//             opcion="SUMA"
//             operacion=Suma(numero1,numero2);
//             cadena=Formato(operacion,opcion);
//             return cadena;
//         }

//         else if (opcion===2){
//             opcion="RESTA"
//             operacion=Resta(numero1,numero2);
//             cadena=Formato(operacion,opcion);
//             return cadena;
//         }

//         else if (opcion===3){
//             opcion="MULTIPLICACION"
//             operacion=Multiplicacion(numero1,numero2);
//             cadena=Formato(operacion,opcion);
//             return cadena;
//         }

//         else if (opcion===4){
//             opcion="DIVISION"
//             operacion=Division(numero1,numero2);
//             cadena=Formato(operacion,opcion);
//             return cadena;
//         }
//     }

    

    
    
// }

// const Suma=(numero1,numero2)=>{
//     let operacion=numero1+numero2;
//     return operacion;
// }

// const Resta=(numero1,numero2)=>{
//     let operacion=numero1-numero2;
//     return operacion;
// }

// const Multiplicacion=(numero1,numero2)=>{
//     let operacion=numero1*numero2;
//     return operacion;
// }

// const Division=(numero1,numero2)=>{
//     let operacion=numero1/numero2;
//     return operacion;
// }

// const Formato=(resultado,opcion)=>{
//     let formato="EL resultado de la operacion ("+opcion+") es : "+resultado;
//     return formato;
// }

// let ciclo=prompt("Deseas entrar a la caluladora:SI NO: ");
// let dato=conoceroperacion(ciclo);
// document.write(dato)


// CLASES 
// class Animal{
//     constructor(especie,edad,tamaño){
//         this.especie=especie;
//         this.edad=edad;
//         this.tamaño=tamaño;
//     }

//     verinfo(){
//         document.write("Informacion: "+this.especie+this.edad+this.tamaño)
//     }


// }


// let perro= new Animal("Perruna",10,1.70);

// perro.verinfo();

//Crea Una calculadora con una clase 

// class Calculadora{
//     constructor(numero1,numero2){
//         this.numero1=numero1;
//         this.numero2=numero2;
//     }

//     suma(){
//         let resultado=this.numero1+this.numero2;
//         document.write("El Resultado de la Suma: " +resultado+"<br>");
//     }

//     resta(){
//         let resultado=this.numero1-this.numero2;
//         document.write("El Resultado de la Resta: "+resultado+"<br>");
//     }

//     mult(){
//         let resultado=this.numero1*this.numero2;
//         document.write("El Resultado de la Multiplicacion: "+resultado+"<br>");
//     }

//     div(){
//         let resultado=this.numero1/this.numero2;
//         document.write("El Resultado de la Division: "+resultado+"<br>");
//     }
// }

// let calculo1=new Calculadora(10,15);
// calculo1.suma()
// calculo1.resta()
// calculo1.mult()
// calculo1.div()


//Herencia

// class Animal{
//     constructor(especie,edad,color){
//         this.especie=especie;
//         this.edad=edad;
//         this.color=color;
//     }

//     verinfo(){
//         document.write("La Especie es: "+this.especie)
//     }
// }

// class Perro extends Animal{
//     constructor(especie,edad,color,pelaje,cola){
//         super(especie,edad,color);
//         this.pelaje=pelaje;
//         this.cola=cola;
        
//     }
//     static ladrar(){
//         document.write("WOOOW");
//     }
// }

// let objeto1=new Perro("Perro",10,"Gris","puntiagudo","roja");
// objeto1.verinfo();

// //Aqui utilice su metodo statico no cree un objeto solo use su metodo
// Perro.ladrar();


// SET and GET
// class Alumno{
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     set modificarNombre(nuevanombre){
//         this.nombre = nuevanombre;
//     }

//     set modificarEdad(nuevaedad){
//         this.edad=nuevaedad;
//     }

//     get obtenerNombre(){
//         return this.nombre;
//     }

//     get obtenerEdad(){
//         return this.edad;
//     }
// }

// let alumno1=new Alumno("Daniel",19);
// document.write(alumno1.nombre);

// alumno1.modificarNombre="Juan";
// document.write(alumno1.nombre);
// document.write(alumno1.obtenerNombre);
// document.write(alumno1.obtenerEdad);


//OTRO EJEMPLO DE CLASES Y HERENCIA

// class Celular{
//     constructor(color,peso,resolucionpantalla,resolucioncamara,ram){
//         this.color=color;
//         this.peso=peso;
//         this.resolucionpantalla=resolucionpantalla;
//         this.resolucioncamara=resolucioncamara;
//         this.ram=ram
//         this.encendido=false;
//     }

//     botonOn_Off(){
//         if (this.encendido==false){
//             alert("Encendiendo Celular")
//             this.encendido=true;
//         }
//         else{
//             alert("Celular Apagado")
//             this.encendido=false;
//         }
//     }

//     reiniciar(){
//         if (this.encendido==true){
//             alert("Reiniciando Celular")
//         }

//         else{
//             alert("El Celular esta Apagado")
//             this.encendido=false;
//         }
//     }

//     tomarfoto(){
//         alert("Foto tomada en una resolucion en :"+this.resolucioncamara);

//     }

//     grabarvideo(){
//         alert("Grabacion en una resolucion de :"+this.resolucioncamara)
//     }    

//     mostrarInfo(){
//         let color = "El Color del celular es: "+this.color+"<br>"
//         let peso = "El peso del celular es: "+this.peso+"<br>"
//         let resolucionpantalla = "El resolucion pantalla del celular es: "+this.resolucionpantalla+"<br>"
//         let resolucioncamara = "El resolucion camara del celular es: "+this.resolucioncamara+"<br>"
//         let info=(color+peso+resolucionpantalla+resolucioncamara);
//         return info;
    
//     }
// }
// class CelularAltaGama extends Celular{
//     constructor(color,peso,resolucionpantalla,resolucioncamara,ram,resoluciondecamaraextra){
//     super(color,peso,resolucionpantalla,resolucioncamara,ram);
//     this.resoluciondecamaraextra=resoluciondecamaraextra;
//     }

//     grabarcamaralenta(){
//         alert("estas grabando en camara lenta")
//     }

// } 
// let celular1=new Celular("rojo","150 gr","5p","fullhd","2 GB")

// // celular1.botonOn_Off();
// // celular1.reiniciar();
// // document.write(celular1.mostrarInfo());

// // celular1.tomarfoto();
// // celular1.grabarvideo();
// // celular1.botonOn_Off();



//METODOS DE CADENAS

// let cadena0="cadena1 cadena1"
// let cadena="cadena1";
// let cadena2="dadena2";
// let cadena3="cadena3";
// let cadena5="hola como estas"
// let numero=1;
// // let resultado=cadena.concat(cadena2,cadena3);


// let resultado1 = cadena.startsWith("ca" )
// let resultado2 = cadena.endsWith("1" )
// let resultado3 = cadena.includes("dena" )
// let resultado4 = cadena.indexOf("dena" )
// let resultado5 = cadena0.lastIndexOf("dena" )
// let resultado6 = cadena0.repeat(2)
// let resultado7 = cadena5.split(" ")
// let resultado8 = cadena.substring(0,3);
// let resultado9 = cadena.toLowerCase();
// let resultado10 = cadena.toUpperCase();
// let resultado11 = numero.toString();
// let resultado12 = cadena.length;
// document.write(resultado12);



//METODOS DE ARRAYS

// let lista=["daniel","eduardo","gustavo","rojas"];
// let numeros=[0,1,2,3,4,5]
// let numerodes=[1,2,2,5,4,3,68,95,21]
//let resultado=lista.pop();
//let resultado=lista.shift();

//lista.push("nuevo")

//numeros.reverse()

//numeros.unshift(-1,-2,-3);
//numerodes.sort()

//lista.splice(2,1,"nuevo")

//let resultado=lista.join("--");

// let resultado=lista.slice(1,3);
// document.write(resultado);

// let lista=["hola","hola","acde","dododod"];

// let resultado=lista.filter(caracter=>caracter.length<= 4)

// document.write(resultado);


//MODULO MATH

// let numero=1.234
// let numeroraiz=Math.sqrt(25);
// let numeroraizcubica=Math.cbrt(25);
// let max=Math.max(25,40,10,123,20);
// let min=Math.min(25,40,10,123,20);
// let x=Math.random();

// let trunc=Math.trunc(numero);

// numero=Math.round(numero);
// document.write(trunc);


//Problema :
//Un salon itera este array:

// let datos={Maestros:["Juan","Jorge","Alicia"],
//             Materias:["Mate","Fisica","Quimica"],
//             Alumnos:["alumno1","alumno2","alumno3"]
// }

// let traerMaestros=()=>{
//     document.write(datos["Maestros"]);
// }

// let traerMaterias=()=>{
//     document.write(datos["Materias"]);
// }

// let traerAlumnos=()=>{
//     document.write(datos["Alumnos"]);
// }


// let opciones=()=>{
//     let opcion=prompt("1=Maestros 2=Materias 3=Alumnos");
//     return parseInt(opcion);
// }


// let op=opciones()

// if (op===1){
//     traerMaestros();
// }

// else if (op===2){
//     traerMaterias();
// }

// else{
//     traerAlumnos();
// }


//METODOS DE SELECCION DE ELEMENTOS:

// let dato=document.getElementById("id1")
// document.write(dato);


// let dato2=document.getElementsByTagName("p")

// document.write(dato2);


// let dato3=document.querySelector(".parrafo");
// document.write(dato3);


// let dato4=document.querySelectorAll(".parrafo");
// document.write(dato4)
// document.write(dato4[0])


//METODOS PARA DEFINIR OBTENER Y ELIMINAR VALORES DE ATRIBUROS
//Cambiar el tipo de input con setAttribute
// let tipo=document.querySelector(".prueba");

// tipo.setAttribute("type","color");


//Obtener el atributo "type"
// document.write(tipo.getAttribute("type"));

//Remueve el atributo type
// tipo.removeAttribute("type");

