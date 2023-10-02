// @ts-check
/// <reference path="./type.d.ts"/>
/// <reference path="./util.js"/>

/**
 * The base URL for the Kiite API.
 * @type {string}
 */
const API_BASE = "https://cafe.kiite.jp";

/**
 * Fetches data from the Kiite API.
 * @type {(
 *  (url: "/api/cafe/timetable", param: { limit: number }) => TimetableItem[]
 *  ) & (
 *  (url: "/api/cafe/rotate_users", param: { ids: string | number | number[] | string[] }) => Record<number, number[] | undefined>
 *  ) & (
 *  (url: "/api/sns/songs", param: { video_ids: string | string[] }) => SnsSongs
 *  )}
 * @param {string} url - The API endpoint to fetch data from.
 * @param {Object} param - The parameters to include in the API request.
 * @returns {any} - The data returned from the API.
 * @throws {Error} - If the API response code is not 200.
 */
const fetchApi = (url, param) => {
  const paramStr = Object.entries(param ?? {}).map(([k, v]) => `${k}=${v}`).join("&");
  const response = UrlFetchApp.fetch(API_BASE + url + "?" + paramStr);
  if (response.getResponseCode() !== 200) throw Error(response.getResponseCode() + " Error");
  const json = JSON.parse(response.getContentText());

  return json;
};

/**
 * Fetches the timetable data from the Kiite API.
 * @returns {TimetableItemWithDetail[]} - The timetable data.
 */
const fetchTimetable = () => {
  const timetable = fetchApi("/api/cafe/timetable", { limit: 100 });
  const rotateUsers = fetchApi("/api/cafe/rotate_users", { ids: timetable.map(v => v.id) });
  const kiiteSongData = fetchApi("/api/sns/songs", { video_ids: timetable.map(v => v.video_id) });
  const kiiteSongDataMap = new Map(Object.values(kiiteSongData.songs).map(v => [v.video_id, v]));

  const merged = timetable.map(v => ({
    ...v,
    rotate_users: rotateUsers[v.id] ?? null,
    fav_count: kiiteSongDataMap.get(v.video_id)?.fav_count ?? 0
  }));
  return merged;
};
