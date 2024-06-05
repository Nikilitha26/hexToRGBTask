document.addEventListener("DOMContentLoaded", function () {
    const hexInput = document.getElementById("hex");
    const rgbInput = document.getElementById("rgb");
    const convertButton = document.getElementById("convert");
  
    convertButton.addEventListener("click", function () {
      const hexValue = hexInput.value;
      const rgbValue = hexToRgb(hexValue);
      rgbInput.value = rgbValue;
    });
  });
  
  function hexToRgb(hex) {
    hex = hex.replace("#", "");
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  