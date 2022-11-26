function mostrar(){
    let v1=parseInt(document.getElementById('v1').value);
    let r=document.getElementById('r');
    r.innerHTML="";
    for(let i=0;i<=v1;i++){
        if(i%2==0){
            r.innerHTML+=i+"-";
        }
    
    }

}


