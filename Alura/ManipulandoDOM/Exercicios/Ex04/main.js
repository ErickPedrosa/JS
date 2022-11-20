
function mostraTintas(element){
    listaElem = element.parentNode.querySelectorAll("[cor]");

    listaElem.forEach((e, i) => {
        if(e.style.visibility == "hidden"){
            e.style.visibility = "visible";
        }else{
            e.style.visibility = "hidden";
        }
        
    });

}
