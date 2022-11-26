function crescente(){

    let v1=parseInt(document.getElementById('v1').value);
    let r=parseInt(document.getElementById('r').value);
    let n=parseInt(document.getElementById('n').value);
    var res=document.getElementById('res');
    res.innerHTML= '';

    for(let i=v1;i<=n;i=i+r){
            res.innerHTML+=i+"-";
        }
    
    }
function decrescente(){

    let v1=parseInt(document.getElementById('v1').value);
    let r=parseInt(document.getElementById('r').value);
    let n=parseInt(document.getElementById('n').value);
    var res=document.getElementById('res');
    res.innerHTML= '';

    for(let i=v1;i>=n;i=i-r){
            res.innerHTML+=i+"-";
        }
    
    }