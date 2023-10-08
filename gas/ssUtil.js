// @ts-check
/// <reference path="./consts.js"/>

/**
 * Inserts a new sheet into the given spreadsheet with the specified name and sets the values of the first row to the values in the ROWS array.
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} spreadSheet - The spreadsheet to insert the new sheet into.
 * @param {string} name - The name to give the new sheet.
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} The newly created sheet.
 */
const insertSheet = (spreadSheet, name) => {
  const newSheet = spreadSheet.insertSheet(name, 0);
  newSheet.getRange(1, 1, 1, ROWS.length).setValues([ROWS.map(v => v.label)]);
  return newSheet;
};

/**
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 */
const getPrevSheet = (ss, sheet) => {
  const sheetName = sheet.getName();
  const [year, month] = sheetName.split("-").map(Number);
  const months = year * 12 + month - 2;
  const prevYear = String(months / 12 | 0).padStart(4, "0");
  const prevMonth = String(months % 12 + 1).padStart(2, "0");
  return ss.getSheetByName(`${prevYear}-${prevMonth}`);
};

/**
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {number} startRow
 * @param {number} length
 * @returns {ViewerApiResult[]}
 */
const getTimetableData = (ss, sheet, startRow, length) => {
  const lengthToGet = Math.min(startRow - 1, length);
  const data = lengthToGet > 0
    ? sheet.getRange(startRow - lengthToGet + 1, 1, lengthToGet, ROWS.length).getValues().reverse()
    : [];

  const result = data.map(row =>
    ROWS.reduce((res, { label, format }, i) => (
      setObj(res, label, "revFunc" in format ? format.revFunc(row[i]) : row[i])
    ), /** @type {ViewerApiResult} */({}))
  );

  if (result.length < length) {
    const prevSheet = getPrevSheet(ss, sheet);
    if (prevSheet) {
      const lastRow = prevSheet.getLastRow();
      const nextData = getTimetableData(ss, prevSheet, lastRow, length - result.length);
      return result.concat(nextData);
    }
  }
  return result;
};

/**
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss
 * @param {string} dateStr
 * @param {number} length
 * @returns {ViewerApiResult[]}
 */
const getTimetableDataByDate = (ss, dateStr, length) => {
  const sheetName = formatSheetName(dateStr);
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];

  const lastRow = sheet.getLastRow();
  const dateRow = ROWS.findIndex(v => v.label === "start_time") + 1;
  const dates = sheet.getRange(2, dateRow, lastRow).getValues().flat();
  const boundaryRow = lowerBoundDate(dates, dateStr) + 2;

  return getTimetableData(ss, sheet, boundaryRow - 1, length);
};
