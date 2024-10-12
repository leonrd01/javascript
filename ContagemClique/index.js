let clicks = 0;
function Click(){
    document.getElementById("ocult").innerHTML = "Ocultar/Mostrar Texto Abaixo"
    clicks++;
    document.getElementById("cont").innerHTML= clicks;
    document.getElementById("msg").innerHTML= "<b>O Botão Foi Clicado!</b>";
    
}

function ocultar(){
    if(msg.style.display === "none"){
        msg.style.display = "block";  
    }else{
        const msg = document.getElementById("msg");
        msg.style.display = "none";
    }
    
}

