var factorial = require('micromath-factorial');

module.exports = function(numTop, numBot) {
  var numTopRounded = Math.round(numTop);
  var numBotRounded = Math.round(numBot);

  if(numBotRounded === 0 || numTopRounded === numBotRounded) return 1;

  return Math.round(factorial(numTopRounded) / (factorial(numTopRounded-numBotRounded) * factorial(numBotRounded)));
};
