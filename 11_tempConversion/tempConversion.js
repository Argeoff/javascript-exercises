const convertToCelsius = function(cel) {
  const result = (cel - 32) * 5/9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(fan) {
  const result = (fan * 9/5) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
