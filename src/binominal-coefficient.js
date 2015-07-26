var factorial = require('micromath-factorial');

module.exports = function(numTop, numBot) {
  var numTopRounded = Math.round(numTop);
  var numBotRounded = Math.round(numBot);

  if(numTopRounded < numBotRounded) throw new Error('The bottom number can not be as bigger as the the top number');
  if(numBotRounded === 0 || numTopRounded === numBotRounded) return 1;

  return Math.round(factorial(numTopRounded) / (factorial(numTopRounded-numBotRounded) * factorial(numBotRounded)));
};
