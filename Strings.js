function remCharString(c2rem, srcString)
{
var newString ="";
for(var i=0; i< srcString.length; i++){
  if(srcString[i] != c2rem){
	newString+= srcString[i];
      }else{
    newString+= "&";
  }

}//end for i
alert("end of fn remCharString");
return (newString);
}


function stringUp()
{
 var parag = document.getElementById("demo");
 var inStr = parag.innerHTML; //"ABCDEFGHIJKLMNOP";
  //parag.innerHTML = remCharString(inStr[0], inStr);
  parag.innerHTML = remCharString(" ", inStr);

 //parag.innerHTML += "replaced+";
//parag.innerHTML = inStr;

}

