//event handlers

const btn = document.getElementById("btn");

btn.onclick = function(){
    console.log("first click");
}

btn.onclick = function(e){
    console.log("second click");
}

//event Listnesrs

btn.addEventListener("click",function(){
    console.log("addEventListener first click");
});

btn.addEventListener("click",function(){
    console.log("addEventListener 2nd click");
});