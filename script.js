function fa(){
    if(a.value=="" || b.value==""){
    f()
    document.getElementById("a").style.border="3px solid red";
    document.getElementById("b").style.border="3px solid red";
    bt.value="Submit";
    }
    else{
    document.getElementById("a").style.border="3px solid green";
    document.getElementById("b").style.border="3px solid green";
    bt.value="Submit";
    bt.style.left="140px";
    }
    }
    flag=1;
    function f(){
    if(flag==1){
    bt.style.left="200px";
    flag=2;
    }
    else if(flag==2){
    bt.style.left="70px";
    flag=1;
    }
    }