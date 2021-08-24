var cookie = document.querySelector("#popup");
var hot1 = document.querySelector("#hot1");
var hot2 = document.querySelector("#hot2");
var hot3 = document.querySelector("#hot3");
var hot4 = document.querySelector("#hot4");
var cold1 = document.querySelector("#cold1");
var cold2 = document.querySelector("#cold2");
var cold3 = document.querySelector("#cold3");
var cold4 = document.querySelector("#cold4");
var counter = 0;

function deletee(){
    cookie.remove();
}

function burbank(element){
    alert("loading weather report");
}

function chicago(element){
    alert("loading weather report");
}

function dallas(element){
    alert("loading weather report");
}

function chooseDeg(element){
    if(counter % 2 != 0){
        hot1.innerText = "24°";
        hot2.innerText = "27°";
        hot3.innerText = "21°";
        hot4.innerText = "26°";
        cold1.innerText = "18°";
        cold2.innerText = "19°";
        cold3.innerText = "16°";
        cold4.innerText = "21°";
        counter++;
    }
    else{
        hot1.innerText = "75°";
        hot2.innerText = "80°";
        hot3.innerText = "69°";
        hot4.innerText = "78°";
        cold1.innerText = "65°";
        cold2.innerText = "66°";
        cold3.innerText = "61°";
        cold4.innerText = "70°";
        counter++;
    }
}