const contenedor=document.querySelector(".contenedor");
const documentFragment=document.createDocumentFragment();



let img0="<img id='myImage' src='../static/img/foquito0.jpeg'></img>"

let div=document.createElement("DIV");
div.classList.add("Foquito")
div.innerHTML=(img0)
documentFragment.appendChild(div);
contenedor.appendChild(documentFragment);

function Foquito0(){
    let img0="<img id='myImage' src='../static/img/foquito0.jpeg'></img>"
    
    
    div.innerHTML=(img0);
    
    documentFragment.appendChild(div);
    contenedor.appendChild(documentFragment);
}

function Foquito1(){
    let img1="<img id='myImage' src='../static/img/foquito1.jpeg'></img>"

    div.innerHTML=(img1);
    
    documentFragment.appendChild(div);
    contenedor.appendChild(documentFragment);

}

