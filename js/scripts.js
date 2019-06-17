$(document).ready(function(){
$("#add-address").click(function() {
  $("#new-addresses").append('<div class="form1">' +
                               '<div id="orders">' +
                                 'size:' +
                                 '<input type="text" class="form-control">' +
                               '</div>' +
                               '<div class="form1">' +
                                 'Top:' +
                                 '<input type="text" class="form-control">' +
                               '</div>' +
                               '<div class="form1">' +
                                 'Crust' +
                                 '<input type="text" class="form-control">' +
                               '</div>' +
                             '</div>');
});
});

var outputname = function  (){
var size = (document.getElementById('one').value).toUpperCase();
var top = (document.getElementById('two').value).toUpperCase();
var crust = (document.getElementById('three').value).toUpperCase();
var delivery = (document.getElementById('four').value).toUpperCase();

var x = size;
var y = top;
var z = crust;
var d = delivery;
var total = [500, 750, 1000, 200, 150];

if(!isNaN(size)) {
  alert("please enter a standard Size");
  return;
}else if(x=="SMALL" && d=="YES"){
  document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 500";
  document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 150";
  total = total[0] + total[3] + total[4];
  var s = (prompt("Please your location for delivery."));
  alert("Thank for reaching out to us. Your Order will be delivered to "+s );
}else if(x=="MEDIUM" && d=="YES") {
  document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 750";
  document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 150";
   total = total[1] + total[3] + total[4];
   var m = (prompt("Please your location for delivery."));
   alert("Thank for reaching out to us. Your Order will be delivered to "+m );
}else if(x=="LARGE" && d=="YES"){
  document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1000";
  document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 150";
  total = total[2] + total[3] + total[4];
  var l = (prompt("Please your location for delivery."));
  alert("Thank for reaching out to us. Your Order will be delivered to "+l );

}else if(x=="SMALL"){
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 500";
    total = total[0] + total[3];
  }else if(x=="MEDIUM") {
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 750";
     total = total[1] + total[3];
  }else if(x=="LARGE"){
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1000";
    total = total[2] + total[3];
}else if (isNaN(size)) {
  alert("please enter a standard Size");
  return;
}

if (y=="BACON" || y=="MEAT" || y=="PEPPERONI" || y=="VEGGIE") {
    document.getElementById("demo").innerHTML="TOPPPING:  "+ y + "Ksh 100";
}else {
  alert("Please enter your preferred topping.");
  return;
}

if (z=="CRISPY" || z=="STUFFED" || z=="GLUTEN-FREE") {
    document.getElementById("demos").innerHTML="CRUST:  "+ z + "Ksh 100";
}else {
  alert("Please enter your preferred crust.");
  return;
}
  document.getElementById("demoos").innerHTML="TOTAL IS "+ total;
};
