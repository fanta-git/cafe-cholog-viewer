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
