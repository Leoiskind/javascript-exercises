const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let total = 0;
  for (let i=0; i<nums.length; i++){
    total += nums[i];
  }
  return total;
};

const multiply = function(nums) {
  let total = 1;
  nums.forEach((num) => total *= num);
  return total;
};

const power = function(a, n) {
  let total = 1;
	for (let i=0; i<n; i++){
    total *= a;
  }
  return total;
};

const factorial = function(a) {
	let total = 1;
	for (let i=0; i<a; i++){
    total *= (a-i);
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
