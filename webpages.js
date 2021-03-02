
var navOpened=false;
document.onclick = function(){
    if(!navOpened){
        closeNav();
    }
    else{
        navOpened=false
    }
}


function openNav() {
document.getElementById("myNav").style.width = "25%";
    navOpened=true;
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}