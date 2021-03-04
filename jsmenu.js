document.getElementById("burguer").addEventListener("click",desplegar);
var i=0;
function desplegar(){
	if(i==0){
		document.getElementById("menu").style.display="block";
		i=1;
	} 
	else{
		document.getElementById("menu").style.display="none";
		i=0;
	}
}
document.getElementById("bici").addEventListener("click",desplegarb);
var y=0;
function desplegarb(){
	if(y==0){
		document.getElementById("sub").style.display="block";
		y=1;
	} 
	else{
		document.getElementById("sub").style.display="none";
		y=0;
	}
}
document.getElementsByClassName("carretera").addEventListener("click",desplegarc);
var z=0;
function desplegarc(){
	if(z==0){
		document.getElementsByClassName("modelos").style.display="block";
		document.getElementsByClassName("personalizar").style.display="block";
		z=1;
	} 
	else{
		document.getElementsByClassName("modelos").style.display="none";
		document.getElementsByClassName("personalizar").style.display="none";
		z=0;
	}
}
