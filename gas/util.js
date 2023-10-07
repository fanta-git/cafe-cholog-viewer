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
 * 与えられた日付の配列のうち、目的の日付以降の最初の日付のインデックスを返す。
 * @param {string[]} dates - 日付の配列
 * @param {string} targetDate - 目的の日付
 * @returns {number} - 目的の日付以降の最初の日付のインデックス
 */
const findFirstIndexAfter = (dates, targetDate) => {
  const targetMs = Date.parse(targetDate);
  let first = -1, last = dates.length;

  while (first + 1 < last) {
    const mid = (last + first) / 2 | 0;
    if (Date.parse(dates[mid]) < targetMs) {
      first = mid;
    } else {
      last = mid;
    }
  }
  return last;
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
