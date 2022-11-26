window.onload = function(){
    document.getElementById("btn").addEventListener('click',btn_click);   
}

function calcular(){
    var comp = parseFloat (document.getElementById('comp').value);
    var larg = parseFloat (document.getElementById('larg').value);
    var preco = comp * larg * 36;
    document.getElementById('resultado').innerText = "O preço dos pisos necessários é de R$ "+ preco;
}

function btn_click(){
    calcular();
}