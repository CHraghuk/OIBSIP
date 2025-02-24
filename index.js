document.addEventListener("DOMContentLoaded", function () {
  const tempInput = document.getElementById("temperature");
  const unitSelect = document.getElementById("unit");
  const outputDisplay = document.getElementById("output");
  const convertButton = document.getElementById("convert-button");
  const clearButton = document.getElementById("clear-button");

  function convertTemperature() {
      let tempValue = parseFloat(tempInput.value);
      let selectedUnit = unitSelect.value;
      
      if (isNaN(tempValue)) {
          outputDisplay.innerHTML = "❌ Please enter a valid number!";
          return;
      }

      let convertedTemp = "";
      let resultUnit = "";

      if (selectedUnit === "celsius") {
          let toFahrenheit = (tempValue * 9/5) + 32;
          let toKelvin = tempValue + 273.15;
          convertedTemp = `${toFahrenheit.toFixed(2)}°F | ${toKelvin.toFixed(2)}K`;
      } else if (selectedUnit === "fahrenheit") {
          let toCelsius = (tempValue - 32) * 5/9;
          let toKelvin = (tempValue - 32) * 5/9 + 273.15;
          convertedTemp = `${toCelsius.toFixed(2)}°C | ${toKelvin.toFixed(2)}K`;
      } else if (selectedUnit === "kelvin") {
          let toCelsius = tempValue - 273.15;
          let toFahrenheit = (toCelsius * 9/5) + 32;
          convertedTemp = `${toCelsius.toFixed(2)}°C | ${toFahrenheit.toFixed(2)}°F`;
      }

      outputDisplay.innerHTML = `Converted Temperature: ${convertedTemp}`;
  }

  function clearFields() {
      tempInput.value = "";
      outputDisplay.innerHTML = "";
  }

  convertButton.addEventListener("click", convertTemperature);
  clearButton.addEventListener("click", clearFields);
});
