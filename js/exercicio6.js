window.onload = function(){
    document.getElementById("btn").addEventListener('click',btn_click);   
}

function calcular(){
    var alt = parseFloat (document.getElementById('alt').value);
    var sex = (document.getElementById('sex').value);
    if (sex=="M" || sex =="m"){
var peso = 72.7 * alt - 58;
document.getElementById('resultado').innerText = "O seu peso ideal é KG "+ peso;
    }else if (sex=="F" || sex=="f"){
        var peso1 = 62.1 * alt - 44.7;
        document.getElementById('resultado').innerText = "O seu peso ideal é KG "+ peso1;
    }
    
}

function btn_click(){
    calcular();
}