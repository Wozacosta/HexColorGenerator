/**
 * Created by woza on 11/29/16.
 */

function randomHexByte(){
    return (Math.floor(Math.random()*256));
}

function randomColor(){
    var str = "#";

    for(var i = 0; i < 3; i++){
        str += randomHexByte().toString(16);
    }
    return str;
}

function changeColor(){
    var color = randomColor();
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("h1").innerHTML = color;
}


window.addEventListener("keydown", function(e){
    if (e.code === "Space") {
        changeColor();
    }
});

window.addEventListener("click", function(){
   changeColor();
});


document.querySelector("body").style.backgroundColor = randomColor();
