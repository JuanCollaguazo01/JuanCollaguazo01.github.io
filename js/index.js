$(document).ready(function () {
  $('#BtnJug2').attr("disabled", true);
  $('#Comprobacion').attr("disabled", true);
  document.getElementById('PanelInfo').style.display="block";
  document.getElementById('Cuerpo').style.display="none"
  document.getElementById('Gano1').style.display="none"
  document.getElementById('Gano2').style.display="none"
})

function acepta(){
  document.getElementById('Cuerpo').style.display="block";
  document.getElementById('PanelInfo').style.display="none";
  document.getElementById('Gano1').style.display="none"
  document.getElementById('Gano2').style.display="none"
  $(".audio")[0].play();
}
function noacepta(){
  alert("No sean cobardes. Acepten el reto");
}

var x=1;
var y=0;
var pos;
function rollDice(){
  var die1 = $('#die1').html();
  var status = $('#status').html();
  var d1 = Math.floor(Math.random() * 6) + 1;
  //Pos es la posicion que se movera la ficha
  pos =d1 + y;
  $('#die1').html(d1);

  //El valor de la posicion
  y = pos;

  $( '.Mapa .Cuadrado' )
    .eq( pos )
    .html( $( '.ficha' ) );

  var instruccion1 = Math.floor(Math.random() * 10) + 1;
  $('.ficha').html(instruccion1);
  if (y === 43){
    $('#status').html("Tu posicion "+ 43 +".");
    ganador1();
    y = 0;
  }else if(y > 43){
      y = y - d1;
      $('#status').html("Tu posicion "+ y +".");
  }else{
      $('#status').html("Tu posicion "+ y +".");
  }
  $('#BtnJug1').attr("disabled", true);
  $('#Comprobacion').attr("disabled", false);
}

var Z=1//x
var W=0;//y
var pos2;
function rollDice2(){
  var die1 = $('#die2').html();
  var status = $('#status2').html();
  var d2 = Math.floor(Math.random() * 6) + 1;

  //Pos2 es la posicion que se movera la ficha
  pos2 =d2 + W;
  $('#die2').html(d2);
//El valor de la posicion
  W = pos2;
  $( '.Mapa2 .Cuadrado2' )
    .eq( pos2 )
    .html( $( '.ficha2' ) );
  var instruccion2 = Math.floor(Math.random() * 10) + 1;
  $('.ficha2').html(instruccion2);
  if (W === 43){
    $('#status2').html("Tu posicion "+ 43 +".");
    ganador2();
    W = 0;
  }else if(W > 43){
    W = W - d2;
    $('#status2').html("Tu posicion "+ W +".");
  }else{
    $('#status2').html("Tu posicion "+ W +".");
  }
  $('#BtnJug2').attr("disabled", true);
  $('#Comprobacion').attr("disabled", false);
}

<!--Opcion de habilitar/deshabilitar-->

var codigo = 0;

$('#Comprobacion').click(function () {

  if(codigo === 0){
    $('#BtnJug2').attr("disabled", false);
    $('#BtnJug1').attr("disabled", true);
    codigo = 1;
  }else{
    $('#BtnJug2').attr("disabled", true);
    $('#BtnJug1').attr("disabled", false);
    codigo = 0;
  }
  $('#Comprobacion').attr("disabled", true);
});
function ganador1() {
  document.getElementById('Gano1').style.display="block"
  document.getElementById('Gano2').style.display="none"
  document.getElementById('PanelInfo').style.display="none";
  document.getElementById('Cuerpo').style.display="none"

}
function ganador2() {
  document.getElementById('Gano2').style.display="block"
  document.getElementById('Gano1').style.display="none"
  document.getElementById('PanelInfo').style.display="none";
  document.getElementById('Cuerpo').style.display="none"
}
function reiniciar() {
  document.getElementById('Cuerpo').style.display="block";
  document.getElementById('PanelInfo').style.display="none";
  document.getElementById('Gano2').style.display="none"
  document.getElementById('Gano1').style.display="none"
  location.reload();
}






