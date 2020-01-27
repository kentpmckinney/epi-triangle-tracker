
function check() {

  $("#result").text("");

  let sideA = parseInt($("#sideA").val());
  let sideB = parseInt($("#sideB").val());
  let sideC = parseInt($("#sideC").val());

  if (sideA && sideB && sideC) {

    // Check for side equalities
    aEqB = sideA === sideB;
    aEqC = sideA === sideC;
    bEqC = sideB === sideC;

    // Check for inequality theorem violations
    aGtBC = sideA > (sideB + sideC);
    bGtAC = sideB > (sideA + sideC);
    cGtAB = sideC > (sideA + sideB);
  
    // Determine the type of triangle
    let equilateral = aEqB && bEqC;
    let isoceles = !equilateral && (aEqB || aEqC || bEqC);
    let scalene = !aEqB && !aEqC && !bEqC;
    let inequalityTheorem = aGtBC || bGtAC || cGtAB;
  
    // Report the type of triangle to the user interface
    if (inequalityTheorem) { $("#result").text("This is not a triangle per the inequality theorem.") }
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