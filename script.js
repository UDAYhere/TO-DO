let add=document.querySelector(".Add");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

add.addEventListener("click", ()=> {
    console.log("Add button clicked");
    console.log(input.value);
    let item=document.createElement("li");
    item.innerText=input.value;
    
    let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText="Delete";
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";

});

ul.addEventListener("click", (e)=> {
    if(e.target.tagName==="BUTTON") {
        console.log("Delete button clicked");
        let item=e.target.parentElement;
        ul.removeChild(item);
    }
});