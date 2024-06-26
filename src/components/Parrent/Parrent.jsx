var op;

function func() {
  var result;
  var Num1 = Number(document.getElementById("Num1").value);
  var Num2 = Number(document.getElementById("Num2").value);

  switch(op) {
    case '+':
      result = Num1 + Num2;
      break;
    case '-':
      result = Num1 - Num2;
      break;
    case '*':
      result = Num1 * Num2;
      break; 
    case '/':
      result = Num1 / Num2;
      break;
    default:
      result = "Please select an operation"; 
  }

  document.getElementById("Result").innerHTML = result; 
}

export default Parent;
