// @ts-check
/// <reference path="./consts.js"/>
/// <reference path="./kiiteApis.js"/>
/// <reference path="./ssUtil.js"/>
/// <reference path="./util.js"/>

function main () {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const timetable = fetchTimetable().reverse();
  timetable.pop();

  const monthly = group(timetable, v => formatSheetName(v.start_time));

  for (const [sheetName, monthlyTimetable] of Object.entries(monthly)) {
    const sheet = ss.getSheetByName(sheetName) ?? insertSheet(ss, sheetName);
    const lastRow = sheet.getLastRow();
    const lastId = lastRow > 1
      ? /** @type {number} */ (sheet.getRange(lastRow, 1).getValue())
      : 0;
    const newSongs = monthlyTimetable.filter(v => v.id > lastId);
    if (newSongs.length === 0) continue;

    for (const [index, { format }] of ROWS.entries()) {
      sheet
        .getRange(lastRow + 1, index + 1, newSongs.length, 1)
        .setNumberFormat(FORMAT_TYPES[format].str);
    }

    const writeData = newSongs.map(v => ROWS.map(({ format, trimmer, label }) =>
      FORMAT_TYPES[format].func(trimmer ? trimmer(v) : selectObj(v, label))
    ));

    sheet.getRange(lastRow + 1, 1, writeData.length, writeData[0].length).setValues(writeData);
  }
}
