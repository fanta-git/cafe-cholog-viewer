// @ts-check

/**
 * doGet関数はGoogle Apps ScriptのWebアプリケーションのエントリーポイントです。
 * @param {GoogleAppsScript.Events.DoGet} e - GETリクエストのイベントオブジェクト
 *
 * @returns {GoogleAppsScript.Content.TextOutput} - JSON形式のレスポンス
 */
function doGet(e) {
  const { parameter } = e;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const length = Math.min(Number(parameter.length ?? 10), 100);

  if (parameter.type === "date") {
    const { date } = parameter;
    const resultObj = getTimetableDataByDate(ss, date, length);
    return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify(resultObj));
  }

  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setContent(JSON.stringify(e));
}

function test () {
  const res = doGet({
    contextPath: "",
    contentLength: -1,
    pathInfo: "date",
    queryString: "date=2023-09-30T23%3A55%3A00",
    parameters: {
      date: [
       "2023-09-30T23:55:00"
      ]
    },
    parameter: {
      date: "2023-09-30T23:55:00"
    }
  });
  Logger.log(JSON.parse(res.getContent()).length);
}
