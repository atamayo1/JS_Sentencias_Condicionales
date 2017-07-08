// Sentencias condicionales
//paréntesis ( agrupar un valor condicional)
//llaves {} agrupar codigo
//corchetes [] evaluar valores, generalmente en
/*var nombre = prompt("¿Cuál es tu nombre?");
if (nombre=="James Bond") {
alert("Bienvenido, agente 007");
}else if (nombre == "paco") {
		alert("Bienvenido, agente Paco, tu misión, en caso de que la aceptes es..." )
	}else if(nombre == "Aura Maria"){
			alert("Te amo mucho, agente Aura Maria, eres mi amor :*")
		}else{
	alert("Acceso no permitido");
}*/
/*var dinero = 100;
var auto = true;
var amiga = "Lola";
if (dinero > 150 && auto && amiga != "Lola") {
alert("Voy al cine con "+amiga);
}else if (dinero<=100 && auto== false && amiga=="Martha") {
alert("Voy a tomar un cafe con Martha");
}else if (dinero<=100 && auto && amiga=="Lola") {
alert("Voy al teatro con Lola (ella paga)");
}else  {
alert("Me quedo a ver el futbol solo");
}
*/
var estadoCivil = prompt("Define tu estado civil:"), mensaje = "Lo invitamos a un viaje a Chiapas ", mensaje2 = "";
switch (estadoCivil) {
  case "soltero":
      mensaje2 = "donde prodrás conocer a más personas solteras "
    break;
  case "Soltero":
      mensaje2 = "donde prodrás conocer a más personas solteras "
    break;
  case "casado":
    mensaje2 = "donde podrás disfrutar a tu familia ";
    break;
  case "Casado":
    mensaje2 = "donde podrás disfrutar a tu familia ";
    break;
  case "divorciado":
    mensaje2 = "donde podrás olvidar tus problemas ";
    break;
  case "Divorciado":
    mensaje2 = "donde podrás olvidar tus problemas ";
    break;
  case "viudo":
    mensaje2 = "donde podrás recordar tus mejores tiempos "
    break;
  case "Viudo":
    mensaje2 = "donde podrás recordar tus mejores tiempos "
    break;
  case "arrejuntado":
    mensaje2 = "para que tomes esa importante decisión "
    break;
  case "Arrejuntado":
    mensaje2 = "para que tomes esa importante decisión "
    break;
  default:
  mensaje2 = "para que definas tu estado civil "

}

var mensaje3 = " en una extraordinaria experiencia en la selva";
document.write(mensaje+mensaje2+mensaje3+"<br><br>");
