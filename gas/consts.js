// @ts-check

/**
 * @typedef FormatType
 *
 * @property {string} str
 * @property {(v: any) => any} func
 * @property {(v: any) => any} [revFunc]
 */

/** @satisfies {Record<string, FormatType>} */
const FORMAT_TYPES = {
  string: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => v == null ? "null" : String(v).replace(/^(_*null)$/, "_$1"),
    revFunc: v => v === "null" ? null : v.replace(/^_(_*null)$/, "$1")
  },
  id: {
    str: "0",
    /** @type {(v: any) => number} */
    func: v => Number(v ?? -1),
    revFunc: v => v === -1 ? null : v
  },
  number: {
    str: "#,##0",
    /** @type {(v: any) => number} */
    func: v => Number(v ?? 0)
  },
  length: {
    str: "m:ss",
    /** @type {(v: any) => string} */
    func: v => ["00", ...String(v ?? "0:00").split(":")].slice(-3).map(v => v.padStart(2, "0")).join(":"),
    revFunc: v => formatLength(v)
  },
  list: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => v?.join?.(" ") ?? "null",
    revFunc: v => v === "null" ? null : v.split(" ")
  },
  bool: {
    str: "@",
    /** @type {(v: any) => string} */
    func: v => String(v),
    revFunc: v => v === "null" ? null : v === "true"
  },
  date: {
    str: "yyyy-MM-dd h:mm:ss.000",
    /** @type {(v: any) => string} */
    func: v => v.split("+")[0],
    revFunc: v => formatISO(v)
  }
};

/**
 * @typedef SheetRowShort
 * @property {keyof TimetableItemWithDetail | `${keyof TimetableItemWithDetail}.${string}`} label
 * @property {FormatType} format
 */

/**
 * @typedef SheetRowLong
 * @property {string} label
 * @property {FormatType} format
 * @property {(v: TimetableItemWithDetail) => any} trimmer
 * @property {(v: string | number, resObj: any) => void} [marger]
 */

/** @satisfies {(SheetRowShort | SheetRowLong)[]} */
const ROWS = [
  /** @type {const} */ ({
    label: "id",
    format: FORMAT_TYPES.id
  }),
  /** @type {const} */ ({
    label: "video_id",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "title",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "artist_id",
    format: FORMAT_TYPES.id
  }),
  /** @type {const} */ ({
    label: "artist_name",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "start_time",
    format: FORMAT_TYPES.date
  }),
  /** @type {const} */ ({
    label: "msec_duration",
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "published_at",
    format: FORMAT_TYPES.date
  }),
  /** @type {const} */ ({
    label: "request_user_count",
    format: FORMAT_TYPES.number,
    trimmer: v => v.request_user_ids.length
  }),
  /** @type {const} */ ({
    label: "created_at",
    format: FORMAT_TYPES.date
  }),
  /** @type {const} */ ({
    label: "updated_at",
    format: FORMAT_TYPES.date
  }),
  /** @type {const} */ ({
    label: "reasons_priority_count",
    trimmer: v => v.reasons.filter(v => v.type === "priority_playlist").length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "reasons_playlist_count",
    trimmer: v => v.reasons.filter(v => v.type === "add_playlist").length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "reasons_favorite_count",
    trimmer: v => v.reasons.filter(v => v.type === "favorite").length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "thumbnail",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "new_fav_users_count",
    trimmer: v => v.new_fav_user_ids?.length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "rotate_users_count",
    trimmer: v => v.rotate_users?.length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "baseinfo.video_id",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.title",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.first_retrieve",
    format: FORMAT_TYPES.date,
  }),
  /** @type {const} */ ({
    label: "baseinfo.description",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.genre",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.length",
    format: FORMAT_TYPES.length,
  }),
  /** @type {const} */ ({
    label: "baseinfo.tags",
    format: FORMAT_TYPES.list,
  }),
  /** @type {const} */ ({
    label: "baseinfo.thumbnail_url",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.view_counter",
    format: FORMAT_TYPES.number,
  }),
  /** @type {const} */ ({
    label: "baseinfo.comment_num",
    format: FORMAT_TYPES.number,
  }),
  /** @type {const} */ ({
    label: "baseinfo.mylist_counter",
    format: FORMAT_TYPES.number,
  }),
  /** @type {const} */ ({
    label: "baseinfo.embeddable",
    format: FORMAT_TYPES.number,
  }),
  /** @type {const} */ ({
    label: "baseinfo.no_live_play",
    format: FORMAT_TYPES.number,
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_id",
    format: FORMAT_TYPES.id,
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_icon_url",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "baseinfo.user_nickname",
    format: FORMAT_TYPES.string,
  }),
  /** @type {const} */ ({
    label: "colors",
    format: FORMAT_TYPES.list
  }),
  /** @type {const} */ ({
    label: "presenter_users_count",
    trimmer: v => v.presenter_user_ids?.length,
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "belt_message",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "now_message",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "rotate_action",
    format: FORMAT_TYPES.string
  }),
  /** @type {const} */ ({
    label: "bpm",
    format: FORMAT_TYPES.number
  }),
  /** @type {const} */ ({
    label: "display_playlist_link",
    format: FORMAT_TYPES.bool
  }),
  /** @type {const} */ ({
    label: "fav_count",
    format: FORMAT_TYPES.number
  })
];
