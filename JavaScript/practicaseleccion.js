





let input=document.querySelector(".input");
let lista=document.querySelector(".lista");


input.addEventListener("select",(e)=>{
    let inicio=e.target.selectionStart;
    let final=e.target.selectionEnd;
    
    let original=input.value;
    let proceso=original.substring(inicio,final)
    let li=document.createElement("LI");
    li.classList.add("botonsito")
    
    li.innerHTML=(proceso);
    lista.appendChild(li);
    
    
    
})
