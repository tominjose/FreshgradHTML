function java(){
  var l=document.getElementById("three");
  if(this.value.length<7){
    l.textContent="Password must be '7' character or more";
  }
}
var pas=document.getElementById('two');
pas.onblur=java;
