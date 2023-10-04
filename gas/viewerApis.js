// @ts-check

/**
 * doGet関数はGoogle Apps ScriptのWebアプリケーションのエントリーポイントです。
 * @param {GoogleAppsScript.Events.DoGet} e - GETリクエストのイベントオブジェクト
 *
 * @returns {GoogleAppsScript.Content.TextOutput} - JSON形式のレスポンス
 */
function doGet(e) {
  const { parameter, pathInfo } = e;
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (pathInfo === "date") {
    const { date } = parameter;
    const sheetName = formatSheetName(date);
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify([]));
    const lastRow = sheet.getLastRow();
    const dateRow = ROWS.findIndex(v => v.label === "start_time") + 1;
    const dates = sheet.getRange(2, dateRow, lastRow).getValues().flat();
    const boundary = findFirstIndexAfter(dates, date);

    const result = sheet.getRange(boundary + 2, 1, 100, ROWS.length).getValues();
    const resultObj = result.map(row =>
      row.reduce((res, item, i) => (
        setObj(res, ROWS[i].label, item)
      ), {})
    );

    return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify(resultObj));
  }

  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setContent(JSON.stringify(e));
}
