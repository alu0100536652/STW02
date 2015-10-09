"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calcular() {
  var result;
  var temp = original.value;
  
  if (temp)
  {
    var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i;
    var m = temp.match(regexp);
    
    if (m) {
      var num = m[1];
      var type = m[2].toLowerCase();
      num = parseFloat(num);
      if (type == 'c') {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit"
      }
      else {
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius"
      }
      converted.innerHTML = result;
      document.getElementById("converted").className = "resultado";
    }
    else {
      document.getElementById("converted").className = "error";
      converted.innerHTML = "Error! Revise los datos.";
    }
  }
  else
    converted.innerHTML = "";
}