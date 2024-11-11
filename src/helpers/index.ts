/**
 * Ensure if a value is not null or undefined
 * Throw an error is value is undefined or null
 *
 * @param {unknown} value   - the value need to be asserted
 *
 * @return {unknown} the actual value if it is defined
 */
export function assertToBeDefined(value: unknown) {
  if (!value) {
    throw new Error('Value not initialized');
  }
  return value;
}

/**
 * Get the current date
 */
export function getCurrentDate() {
  return new Date();
}
