function ver_estadisticas(clavecurso,cicloano,ciclo,tipociclo,tipoeval,numeval,horario,comision){
  document.estadistica.clavecurso.value=clavecurso
  document.estadistica.Horario.value=horario  
  document.estadistica.cicloano.value=cicloano
  document.estadistica.ciclo.value=ciclo
  document.estadistica.TipoCiclo.value=tipociclo
  document.estadistica.comision.value=comision  
  document.estadistica.tipoevalu.value=tipoeval        
  document.estadistica.numeroeval.value=numeval
  document.estadistica.submit()  
}

var t1=null;
var l1= '';
var mostrar = false;
function ocultar(event)
{
if(t1){ 
	mostrar= false; 
	t1.Hide(event); 
	return;
 }
}


function muestraObservacion(observacion, totalBr,event)
{

if (mostrar == false)
{
	mostrar = true;
}
else	
	{
	t1.Hide(event);
	mostrar = false;
	return;
	}

 div = document.getElementById("vObservacion");
 
 var tam = observacion.length
  var altura;
  

  var ancho;
  
  if (totalBr == 0 && tam > 40)
  {
  	 ancho = tam*5;
  	 div.style.width = ancho+"px";
  }
  else
  {
   ancho = 200;
   div.style.width = ancho+"px";
}
   
 if (tam > 0)
 {
 var lineas = 1 + Math.round( tam / 40)+ totalBr;
 
 altura = 24 + lineas * 13;
 div.style.height = altura+"px";}
 else{
  altura = 80;
 }
 
 if (window.innerWidth<=ancho){
	 div.style.width=(window.innerWidth-100)+"px";//screen.width+"px";
 }
 
 l1='<table border="0"  height='+ altura + ' cellspacing="0" cellpadding="0">'+
'<tr height="10" >'+
	'<td class="pucpCeldaTitulo"  width="80%" align="center"> Observación para el alumno </td>'+
	'<td class="pucpCeldaTitulo"   width="20%"  >'+
		'<img src="jsp/16-square-red-delete.png" height="15" weight="15" onclick="javascript:ocultar(event)" >'+
	'</td>' +
'</tr>'+
'<tr>'+
	'<td width="100%" class="pucpInfo" align="Center">'+observacion+
	'</td>'+
'</tr>'+
'</table>';
 
 

if(t1)
{
t1.Show(event,l1)
mostrar = true;
};
}
function init(){

 div = document.getElementById("vObservacion");
 t1 = new ToolTip("vObservacion",true,40); 
 
}



/*
function abrir_comentario(alumno, clavecurso, cicloano, ciclo, tipociclo, tipoeval, numeval, horario, comision)
{

	var session=document.formSession.session.value;
	
	var pagina="/pucp/notas/nownotpa/nownotpa;jsessionid=" + session + "?accion=AbrirObservacion&alumno="+ alumno + 
	  			"&clavecurso="+ clavecurso + "&cicloano=" + cicloano + "&ciclo="+ ciclo + "&tipociclo=" + tipociclo + "&tipoeval=" + tipoeval + "&numeval=" + numeval + "&horario=" + horario
 				+ "&comision=" + comision;
 				
 
 	/*			
 	
 				alert(pagina);
	 				
	var pagina="/pucp/notas/nownotpa/nownotpa;jsessionid=" + session + "?accion=Ingresar&alumno"+ alumno + 
	  			"&clavecurso="+ clavecurso + "&cicloano=" + cicloano + "&ciclo="+ ciclo + "&tipociclo=" + tipociclo + "&tipoeval=" + tipoeval + "&numeval=" + numeval + "&horario=" + horario
 				+ "&comision=" + comision; 				
 	*/	
 /*				
	var prop = "toolbar=no,location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=600,height=300";
  	ventana = window.open(pagina,"abrirObservacion",prop);
}

*/