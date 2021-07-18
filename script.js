
function yourClick(val){
    document.getElementById('dis').value+=val;
}
function reset(){
    document.getElementById('dis').value="";
}
function result(){
var allDisplay=document.getElementById('dis').value
var result= eval(allDisplay);
document.getElementById('dis').value=result;
}

function backSpace(){
    var backNum= document.getElementById('dis').value;
    document.getElementById('dis').value=backNum.substring(0,backNum.length -1);
  
  }
    