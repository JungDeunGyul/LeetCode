/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
  let currentValue = init;

  return {
    increment: () => {
      currentValue += 1;
      return currentValue;
    },
    decrement: () => {
      currentValue -= 1;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    }
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */