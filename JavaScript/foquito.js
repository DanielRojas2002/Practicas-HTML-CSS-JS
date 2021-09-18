const contenedor=document.querySelector(".contenedor");
const documentFragment=document.createDocumentFragment();


let img0="<img id='myImage' src='../static/img/foquito0.jpeg'></img>"
let img1="<img id='myImage' src='../static/img/foquito1.jpeg'></img>"
let div=document.createElement("DIV");
div.classList.add("Foquito")

function Foquito0(img0){
   
    
    
    div.innerHTML=(img0);
    
    documentFragment.appendChild(div);
    contenedor.appendChild(documentFragment);
}

function Foquito1(img1){
   

    div.innerHTML=(img1);
    
    documentFragment.appendChild(div);
    contenedor.appendChild(documentFragment);

}

