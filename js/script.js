
function check() {

  $("#result").text("");

  let sideA = parseInt($("#sideA").val());
  let sideB = parseInt($("#sideB").val());
  let sideC = parseInt($("#sideC").val());

  if (sideA && sideB && sideC) {
    aEqB = sideA === sideB;
    aEqC = sideA === sideC;
    bEqC = sideB === sideC;
  
    let equilateral = (aEqB && bEqC);
    let isoceles = (!equilateral) && (aEqB || aEqC || aEqC);
    let scalene = !aEqB && !aEqC && !bEqC;
  
    if (equilateral) { $("#result").text("This is an equilateral triangle.") }
    else if (isoceles) { $("#result").text("This is an isosceles triangle.") }
    else if (scalene) { $("#result").text("This is a scalene triangle.") }
    else { $("#result").text("This is not a triangle.") }
  }
  else { 
    $("#result").text("This is not a triangle.");
  }

}

$(document).ready(function(){

  $("#sideA").keyup(function(){ check(); });
  $("#sideB").keyup(function(){ check(); });
  $("#sideC").keyup(function(){ check(); });

});