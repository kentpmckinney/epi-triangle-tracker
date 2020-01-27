
function check() {

  $("#result").text("");

  let sideA = parseInt($("#sideA").val());
  let sideB = parseInt($("#sideB").val());
  let sideC = parseInt($("#sideC").val());

  if (sideA && sideB && sideC) {
    aEqB = sideA === sideB;
    aEqC = sideA === sideC;
    bEqC = sideB === sideC;

    aGtBC = sideA > (sideB + sideC);
    bGtAC = sideB > (sideA + sideC);
    cGtAB = sideC > (sideA + sideB);
  
    let equilateral = (aEqB && bEqC);
    let isoceles = (!equilateral) && (aEqB || aEqC || bEqC);
    let scalene = !aEqB && !aEqC && !bEqC;
  
    if (aGtBC || bGtAC || cGtAB) { $("#result").text("This is not a triangle per the inequality theorem.") }
    else if (equilateral) { $("#result").text("This is an equilateral triangle.") }
    else if (isoceles) { $("#result").text("This is an isosceles triangle.") }
    else if (scalene) { $("#result").text("This is a scalene triangle.") }
  }

}

$(document).ready(function(){

  $("#sideA").keyup(function(){ check(); });
  $("#sideB").keyup(function(){ check(); });
  $("#sideC").keyup(function(){ check(); });

});