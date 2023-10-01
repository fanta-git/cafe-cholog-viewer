// @ts-check

/**
 * @typedef FormatType
 *
 * @property {string} str
 * @property {(v: any) => any} func
 */

/** @satisfies {Record<string, FormatType>} */
const FORMAT_TYPES = {
  string: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => nullableToStr(v)
  },
  id: {
    str: "0",
    /** @type {(v: any) => number} */
    func: v => Number(v ?? -1)
  },
  number: {
    str: "#,##0",
    /** @type {(v: any) => number} */
    func: v => Number(v ?? 0)
  },
  length: {
    str: "m:ss",
    /** @type {(v: any) => string} */
    func: v => ["00", ...String(v ?? "0:00").split(":")].slice(-3).map(v => v.padStart(2, "0")).join(":")
  },
  list: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => v?.join?.(" ") ?? "null"
  },
  list_count: {
    str: "#,##0",
    /** @type {(v: any) => number} */
    func: v => v?.length ?? 0
  },
  date: {
    str: "yyyy-MM-dd h:mm:ss.000",
    /** @type {(v: any) => string} */
    func: v => v.split("+")[0]
  },
  json: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => JSON.stringify(v)
  }
};

/**
 * @typedef SheetRow
 * @property {string} title
 * @property {keyof typeof FORMAT_TYPES} format
 */

/** @satisfies {SheetRow[]} */
const ROWS = [
  /** @type {const} */ ({ title: "id", format: "id" }),
  /** @type {const} */ ({ title: "video_id", format: "string" }),
  /** @type {const} */ ({ title: "title", format: "string" }),
  /** @type {const} */ ({ title: "artist_id", format: "id" }),
  /** @type {const} */ ({ title: "artist_name", format: "string" }),
  /** @type {const} */ ({ title: "start_time", format: "date" }),
  /** @type {const} */ ({ title: "msec_duration", format: "number" }),
  /** @type {const} */ ({ title: "published_at", format: "date" }),
  /** @type {const} */ ({ title: "request_user_ids", format: "list" }),
  /** @type {const} */ ({ title: "created_at", format: "date" }),
  /** @type {const} */ ({ title: "updated_at", format: "date" }),
  /** @type {const} */ ({ title: "reasons", format: "json" }),
  /** @type {const} */ ({ title: "thumbnail", format: "string" }),
  /** @type {const} */ ({ title: "new_fav_user_ids", format: "list" }),
  /** @type {const} */ ({ title: "rotate_users", format: "list" }),
  /** @type {const} */ ({ title: "baseinfo.video_id", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.title", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.first_retrieve", format: "date" }),
  /** @type {const} */ ({ title: "baseinfo.description", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.genre", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.length", format: "length" }),
  /** @type {const} */ ({ title: "baseinfo.tags", format: "list" }),
  /** @type {const} */ ({ title: "baseinfo.thumbnail_url", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.view_counter", format: "number" }),
  /** @type {const} */ ({ title: "baseinfo.comment_num", format: "number" }),
  /** @type {const} */ ({ title: "baseinfo.mylist_counter", format: "number" }),
  /** @type {const} */ ({ title: "baseinfo.embeddable", format: "number" }),
  /** @type {const} */ ({ title: "baseinfo.no_live_play", format: "number" }),
  /** @type {const} */ ({ title: "baseinfo.user_id", format: "id" }),
  /** @type {const} */ ({ title: "baseinfo.user_icon_url", format: "string" }),
  /** @type {const} */ ({ title: "baseinfo.user_nickname", format: "string" }),
  /** @type {const} */ ({ title: "colors", format: "list" }),
  /** @type {const} */ ({ title: "presenter_user_ids", format: "list" }),
  /** @type {const} */ ({ title: "belt_message", format: "string" }),
  /** @type {const} */ ({ title: "now_message", format: "string" }),
  /** @type {const} */ ({ title: "rotate_action", format: "string" }),
  /** @type {const} */ ({ title: "bpm", format: "number" }),
  /** @type {const} */ ({ title: "display_playlist_link", format: "string" }),
  /** @type {const} */ ({ title: "fav_count", format: "number" })
];
