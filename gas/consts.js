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
  date: {
    str: "yyyy-MM-dd h:mm:ss.000",
    /** @type {(v: any) => string} */
    func: v => v.split("+")[0]
  }
};

/**
 * @typedef SheetRowShort
 * @property {keyof TimetableItemWithDetail | `${keyof TimetableItemWithDetail}.${string}`} label
 * @property {keyof typeof FORMAT_TYPES} format
 */

/**
 * @typedef SheetRowLong
 * @property {string} label
 * @property {keyof typeof FORMAT_TYPES} format
 * @property {(v: TimetableItemWithDetail) => any} trimmer
 * @property {(v: string | number, resObj: any) => void} [marger]
 */

/** @satisfies {(SheetRowShort | SheetRowLong)[]} */
const ROWS = [
  /** @type {const} */ ({
    label: "id",
    format: "id"
  }),
  /** @type {const} */ ({
    label: "video_id",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "title",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "artist_id",
    format: "id"
  }),
  /** @type {const} */ ({
    label: "artist_name",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "start_time",
    format: "date"
  }),
  /** @type {const} */ ({
    label: "msec_duration",
    format: "number"
  }),
  /** @type {const} */ ({
    label: "published_at",
    format: "date"
  }),
  /** @type {const} */ ({
    label: "request_user_count",
    format: "number",
    trimmer: v => v.request_user_ids.length
  }),
  /** @type {const} */ ({
    label: "created_at",
    format: "date"
  }),
  /** @type {const} */ ({
    label: "updated_at",
    format: "date"
  }),
  /** @type {const} */ ({
    label: "reasons_priority_count",
    trimmer: v => v.reasons.filter(v => v.type === "priority_playlist").length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "reasons_playlist_count",
    trimmer: v => v.reasons.filter(v => v.type === "add_playlist").length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "reasons_favorite_count",
    trimmer: v => v.reasons.filter(v => v.type === "favorite").length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "thumbnail",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "new_fav_users_count",
    trimmer: v => v.new_fav_user_ids?.length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "rotate_users_count",
    trimmer: v => v.rotate_users?.length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "baseinfo.video_id",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.title",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.first_retrieve",
    format: "date",
  }),
  /** @type {const} */ ({
    label: "baseinfo.description",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.genre",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.length",
    format: "length",
  }),
  /** @type {const} */ ({
    label: "baseinfo.tags",
    format: "list",
  }),
  /** @type {const} */ ({
    label: "baseinfo.thumbnail_url",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.view_counter",
    format: "number",
  }),
  /** @type {const} */ ({
    label: "baseinfo.comment_num",
    format: "number",
  }),
  /** @type {const} */ ({
    label: "baseinfo.mylist_counter",
    format: "number",
  }),
  /** @type {const} */ ({
    label: "baseinfo.embeddable",
    format: "number",
  }),
  /** @type {const} */ ({
    label: "baseinfo.no_live_play",
    format: "number",
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_id",
    format: "id",
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_icon_url",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_nickname",
    format: "string",
  }),
  /** @type {const} */ ({
    label: "colors",
    format: "list"
  }),
  /** @type {const} */ ({
    label: "presenter_users_count",
    trimmer: v => v.presenter_user_ids?.length,
    format: "number"
  }),
  /** @type {const} */ ({
    label: "belt_message",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "now_message",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "rotate_action",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "bpm",
    format: "number"
  }),
  /** @type {const} */ ({
    label: "display_playlist_link",
    format: "string"
  }),
  /** @type {const} */ ({
    label: "fav_count",
    format: "number"
  })
];
