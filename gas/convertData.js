// @ts-check

function convertData() {
  const sourceSS = SpreadsheetApp.openById("___id___");
  const sourceSheets = sourceSS.getSheets().reverse();

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  /** @param {string} item */
  const getLength = item => item ? item.length : 0;

  let skip = 9;

  for (const sourceSheet of sourceSheets) {
    if (skip > 0) {
      skip--;
      continue;
    }
    const targetName = sourceSheet.getName().replace(/timetable_(\d+)_(\d+)/, "$1-$2");
    const targetSheet = ss.getSheetByName(targetName) ?? insertSheet(ss, targetName);
    Logger.log(`${targetName} get sheet`);
    const sourceData = sourceSheet.getDataRange().getValues();

    const header = sourceData[0];
    const writeData = sourceData.map((v, i) => {
      if (i === 0) return ROWS.map(({ label }) => label);
      const data = Object.fromEntries(v.map((v, i) => [header[i], v]));
      /** @type {SelectReason[]} */
      const reasons = data.reasons && JSON.parse(data.reasons);

      return ROWS.map(({ label }) => {
        switch (label) {
          case "request_user_count":
            return getLength(data.request_user_ids);
          case "new_fav_users_count":
            return getLength(data.new_fav_user_ids);
          case "rotate_users_count":
            return getLength(data.rotate_users);
          case "presenter_users_count":
            return getLength(data.presenter_user_ids);
          case "reasons_priority_count":
            return reasons && reasons.filter(v => v.type === "priority_playlist").length;
          case "reasons_playlist_count":
            return reasons && reasons.filter(v => v.type === "add_playlist").length;
          case "reasons_favorite_count":
            return reasons && reasons.filter(v => v.type === "favorite").length;
          default:
            return data[label];
        }
      });
    });

    Logger.log("data");

    for (const [index, { format }] of ROWS.entries()) {
      targetSheet
        .getRange(2, index + 1, writeData.length)
        .setNumberFormat(format.str);
    }

    Logger.log("set format");

    targetSheet.getRange(1, 1, writeData.length, ROWS.length).setValues(writeData);

    Logger.log("write");
  }
}
