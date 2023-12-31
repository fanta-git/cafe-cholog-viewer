// @ts-check
/// <reference path="./type.d.ts" />

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

/**
 * @param {string[]} dates
 * @param {string} targetDate
 * @returns {number}
 */
const lowerBoundDate = (dates, targetDate) => {
  const targetMs = Date.parse(targetDate);
  let first = 0, last = dates.length - 1, middle;
  while (first <= last) {
    middle = (first + last) / 2 | 0;
    if (Date.parse(dates[middle]) < targetMs) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return first;
};

/**
 * @param {string[]} dates
 * @param {string} targetDate
 * @returns {number}
 */
const upperBoundDate = (dates, targetDate) => {
  const targetMs = Date.parse(targetDate);
  let first = 0, last = dates.length - 1, middle;
  while (first <= last) {
    middle = (first + last) / 2 | 0;
    if (Date.parse(dates[middle]) <= targetMs) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return first;
};

/**
 * @type {SelectObj}
 * @param {Record<string, any>} obj
 * @param {string} key
**/
const selectObj = (obj, key) => {
  if (key in obj) return obj[key];
  const keys = key.split(".");
  return keys.reduce((current, key) => current == null ? undefined : current[key], obj);
};

/**
 * @type {SetObj}
 * @param {Record<string, any>} obj
 * @param {string} key
 * @param {any} val
 * @returns {Record<string, any>}
**/
const setObj = (obj, key, val) => {
  const keys = key.split(".");
  const lastKey = keys.pop();
  if (lastKey == null) return obj;
  const lastObj = keys.reduce((current, key) => {
    if (current[key] == null) current[key] = {};
    return current[key];
  }, obj);
  lastObj[lastKey] = val;
  return obj;
};

/**
 * @param {string} dateStr
 * @returns {string}
 */
const formatISO = (dateStr) => {
  return Utilities.formatDate(
    new Date(dateStr),
    "Asia/Tokyo",
    "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
  );
};

/**
 * @param {string} lengthStr
 * @returns {string}
 */
const formatLength = (lengthStr) => {
  return Utilities.formatDate(
    new Date(lengthStr),
    "Asia/Tokyo",
    "m:ss"
  );
};
