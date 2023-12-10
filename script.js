// Get the elements from the document
const inputTemperature = document.getElementById("input-temperature");
const inputUnit = document.getElementById("input-unit");
const convertButton = document.getElementById("convert-button");
const outputTemperature = document.getElementById("output-temperature");

// Add an event listener to the convert button
convertButton.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  let temperature = Number(inputTemperature.value);
  let unit = inputUnit.value;

  // Validate the input
  if (isNaN(temperature)) {
    alert("Please enter a valid number");
    return;
  }

  // Convert the temperature based on the unit
  let result = "";
  switch (unit) {
    case "C":
      // Convert from Celsius to Fahrenheit and Kelvin
      let fahrenheit = (temperature * 9) / 5 + 32;
      let kelvin = temperature + 273.15;
      result = `${temperature} °C = ${fahrenheit.toFixed(
        2
      )} °F = ${kelvin.toFixed(2)} K`;
      break;
    case "F":
      // Convert from Fahrenheit to Celsius and Kelvin
      let celsius = ((temperature - 32) * 5) / 9;
      kelvin = ((temperature - 32) * 5) / 9 + 273.15;
      result = `${temperature} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(
        2
      )} K`;
      break;
    case "K":
      // Convert from Kelvin to Celsius and Fahrenheit
      celsius = temperature - 273.15;
      fahrenheit = ((temperature - 273.15) * 9) / 5 + 32;
      result = `${temperature} K = ${celsius.toFixed(
        2
      )} °C = ${fahrenheit.toFixed(2)} °F`;
      break;
  }

  // Display the result
  outputTemperature.textContent = result;
});
