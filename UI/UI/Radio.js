
function getvalue(temp)
{
document.getElementById("total").value=temp.value;
document.getElementById("val").value=0.0;
document.getElementById("msg").value="";
}
 function getmessage(temp){
    
        document.getElementById("msg").value=temp.value;
       document.getElementById("total").value="";
        document.getElementById("val").value="";

    }
