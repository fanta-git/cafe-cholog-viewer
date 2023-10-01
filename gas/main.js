// @ts-check
/// <reference path="./consts.js"/>
/// <reference path="./kiiteApis.js"/>
/// <reference path="./ssUtil.js"/>
/// <reference path="./util.js"/>

function main () {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const leatestSheet = ss.getSheets().find(v => v.getName().startsWith("timetable"));
  const lastRow = leatestSheet?.getLastRow() ?? 0;
  const lastId = lastRow > 1 ? leatestSheet?.getRange(lastRow, 1).getValue() : 0;
  const timetable = fetchApi("/api/cafe/timetable", { limit: 100 })
    .filter(v => v.id > lastId)
    .reverse();
  timetable.pop();

  const monthly = group(
    mergeTimetableDetails(timetable),
    v => formatSheetName(v.start_time)
  );

  for (const [sheetName, monthlyTimetable] of Object.entries(monthly)) {
    const sheet = ss.getSheetByName(sheetName) ?? insertSheet(ss, sheetName);
    const startRow = sheet.getLastRow() + 1;

    /** @type {(number | string)[][]} */
    const writeData = monthlyTimetable.map(v => ROWS.map(k =>
      FORMAT_TYPES[k.format].func(v[k.title])
    ));

    for (const [index, { format }] of /** @type {IterableIterator<[number, typeof ROWS[number]]>} */ ROWS.entries()) {
      const formatStr = FORMAT_TYPES[format].str;
      sheet.getRange(startRow, index + 1, writeData.length, 1).setNumberFormat(formatStr);
    }

    sheet.getRange(startRow, 1, writeData.length, writeData[0].length).setValues(writeData);
  }
}
