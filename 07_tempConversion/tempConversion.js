const convertToCelsius = function(temp) {
  const farenheit = (temp - 32)*5/9;
  return Number.parseFloat(farenheit.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const celsius = temp*9/5 + 32;
  return Number.parseFloat(celsius.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
