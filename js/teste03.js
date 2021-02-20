//do 1 ate o 3 é este script :)

alert("oie, voltei!!");
// alert("qual seu nome?? :)");
nome = window.prompt("qual seu nome??","");
alert("ola "+nome+" seja bem vindo(a)");


document.write("Testando, epero que goste. :)");
turu.innerHTML =`Ola ${nome} eu sou um teste😎`;
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
//hora = 11
//min = 20
var img  = window.document.getElementById('img')
var bto  = window.document.getElementById('botao')

if(hora >=1 && hora<=12){
    saudacao = "Bom dia";
    document.body.style.background = "#90DA97"
    img.src= '../img/manha.png'
    idhr = "Olha só mais um belo dia"
}
else if(hora>=13 && hora<=18){
    saudacao = "Bom dia";
    document.body.style.background = "#B45A3C"
    img.src= '../img/tarde.png'
    idhr = "Tarde boa para dormir"
}
else{
    saudacao = "Boa noite";
    document.body.style.background = "#141B3D"
    document.body.style.color = "#FFFFFF"
    img.src= '../img/noite.png'
    idhr = "Ja é de noite"
}
toro.innerHTML = ` ${saudacao} são ${hora} Horas e ${min} Minutos `



