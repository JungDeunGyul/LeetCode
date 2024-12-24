/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function(logs, k) {
  const userMinutes = new Map(); 

  for (const [userId, time] of logs) {
    if (!userMinutes.has(userId)) {
      userMinutes.set(userId, new Set());
    }

    userMinutes.get(userId).add(time);
  }

  const uamCounts = new Array(k).fill(0);

  for (const minutes of userMinutes.values()) {
    const uam = minutes.size;
    
    if (uam <= k) {
      uamCounts[uam - 1]++;
    }
  }

  return uamCounts;
};