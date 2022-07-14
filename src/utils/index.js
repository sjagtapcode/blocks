export const minMax = (value, minValue, maxValue) => {
  if (value <= minValue) return minValue;
  if (value >= maxValue) return maxValue;
  return value;
};

export const getRandomNumber = (maximum) => Math.floor(Math.random() * maximum);
