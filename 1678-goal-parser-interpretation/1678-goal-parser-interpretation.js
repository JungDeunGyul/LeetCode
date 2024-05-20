/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  const arr = [];
  const commandLength = command.length;
  
  for (let i = 0; i < commandLength; i++) {
    if (command[i] === "G") {
      arr.push(command[i]);
    } else if (command[i] === "(" && command[i + 1] === ")") {
      arr.push("o");
      i++;
    } else if (command[i] === "(" && command[i + 1] === "a") {
      arr.push("al");
      i += 3;
    }
  }
  
  const result = arr.join("");
  
  return result;
};