const convertToCelsius = function(num) {
  num = ((num-32) * 5/9);
  if (num != Math.floor(num)){
    return Number(num.toFixed(1));
  }
  return num;
};

const convertToFahrenheit = function(num) {
  num = ((num * 9/5) + 32);
  if (num != Math.floor(num)){
    return Number(num.toFixed(1));
  }
  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
