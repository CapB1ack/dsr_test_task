/**
 * Calculates time between current time and startTime.
 * @param {number} startTime
 * @returns {string}
 */
export const getTimeDistance = (startTime: number) => {
  return new Date(Date.now() - startTime).toISOString().slice(11, -1)
};