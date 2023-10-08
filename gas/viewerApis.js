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
    pathInfo: "",
    queryString: "type=date&date=2023-10-01T00%3A05%3A00",
    parameters: {
      type: [
        "date"
      ],
      date: [
       "2023-10-01T00:05:00"
      ]
    },
    parameter: {
      type: "date",
      date: "2023-10-01T00:05:00"
    }
  });
  Logger.log(/** @type {any[]} */(JSON.parse(res.getContent())).map(v => v.title));
}
