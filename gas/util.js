/**
 * Utility functions for cafe-cholog-viewer project.
 * @module util
 */

/**
 * Groups an array of objects by a key function.
 * @template T
 * @template {string | number | symbol} U
 * @param {T[]} objs - The array of objects to group.
 * @param {(obj: T) => U} keyFunc - The function to extract the key from each object.
 * @returns {Record<U, T[]>} - An object whose keys are the extracted keys and values are arrays of objects with that key.
 */
const group = (objs, keyFunc) => {
  const grouped = /** @type {Record<U, T[]>} */({});
  for (const obj of objs) {
    const key = keyFunc(obj);
    if (grouped[key] == null) grouped[key] = [];
    grouped[key].push(obj);
  }

  return grouped;
};

/**
 * Converts a nullable value to a string representation.
 * @param {*} val - The value to convert.
 * @returns {string} - The string representation of the value.
 */
const nullableToStr = (val) => {
  if (val == null) return "null";
  const str = String(val);
  if (/^_*null$/.test(str)) return "_" + str;
  return str;
};

/**
 * Formats a date string into a sheet name for the timetable.
 * @param {string} dataStr - The date string to format.
 * @returns {string} - The formatted sheet name.
 */
const formatSheetName = (dataStr) => {
  const date = new Date(dataStr);
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${yyyy}-${mm}`;
};
