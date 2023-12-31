type SelectReason = {
  type: "priority_playlist";
  user_id: number;
  list_title: string;
  list_id: string;
} | {
  type: "add_playlist";
  user_id: number;
  list_id: number;
} | {
  type: "favorite";
  user_id: number;
};

type TimetableItem = {
  id: number,
  video_id: string,
  title: string,
  artist_id: number,
  artist_name: string,
  start_time: string,
  msec_duration: number,
  published_at: string,
  request_user_ids: number[],
  created_at: string,
  updated_at: string,
  reasons: SelectReason[],
  thumbnail: string,
  new_fav_user_ids: number[] | null,
  baseinfo: {
    video_id: string,
    title: string,
    first_retrieve: string,
    description: string,
    genre: string,
    length: string,
    tags: string[],
    thumbnail_url: string,
    view_counter: string,
    comment_num: string,
    mylist_counter: string,
    embeddable: string,
    no_live_play: string,
    user_id: string,
    user_icon_url: string,
    user_nickname: string
  },
  colors: `#${string}`[],
  presenter_user_ids: number[] | null,
  belt_message: string | null,
  now_message: string | null,
  rotate_action: string | null,
  bpm: number,
  display_playlist_link: boolean
};

type SnsSongData = {
  song_id: number;
  song_unique: string;
  song_title: string;
  song_link: string;
  video_id: string;
  is_faved: boolean;
  fav_count: number;
  creator_id: number;
  creator_unique: string;
  creator_name: string;
  creator_link: string;
  thumbnail: string;
};

type SnsSongs = {
  status: string,
  user: {
    user_id: number,
    user_name: string,
    nickname: string,
    avatar_url: string,
    status: string
  },
  songs: Record<number, SnsSongData>
};

type Join<K, P> = K extends string | number ? P extends string | number ? `${K}.${P}` : never : never
type UnJoin<K> = K extends `${any}.${infer U}` ? U : never;

type Parse<T extends Record<string | number, any>, V extends keyof T> =
  T extends { [K in V]: { [K in infer U]: any} }
    ? T & { [K in Join<V, U>]: T[V][UnJoin<K>] }
    : never;

type TimetableItemWithDetail = TimetableItem & {
  rotate_users: number[] | null,
  fav_count: number,
};

type SelectObj = {
  <T extends Record<string, any>, K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(obj: T, key: `${K}.${L}.${M}`): T[K][L][M];
  <T extends Record<string, any>, K extends keyof T, L extends keyof T[K]>(obj: T, key: `${K}.${L}`): T[K][L];
  <T extends Record<string, any>, K extends keyof T>(obj: T, key: K): T[K];
  <T extends Record<string, any>>(obj: T, key: string): any;
};

type SetObj = {
  <T extends Record<string, any>, K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(obj: T, key: `${K}.${L}.${M}`, val: T[K][L][M]): T;
  <T extends Record<string, any>, K extends keyof T, L extends keyof T[K]>(obj: T, key: `${K}.${L}`, val: T[K][L]): T;
  <T extends Record<string, any>, K extends keyof T>(obj: T, key: K, val: T[K]): T;
  <T extends Record<string, any>>(obj: T, key: string, val: any): T;
};

type ViewerApiResult = {
  id: number,
  video_id: string,
  title: string,
  artist_id: number,
  artist_name: string,
  start_time: string,
  msec_duration: number,
  published_at: string,
  request_users_count: number,
  created_at: string,
  updated_at: string,
  reasons_priority_count: number,
  reasons_add_playlist_count: number,
  reasons_favorite_count: number,
  thumbnail: string,
  new_fav_users_count: number,
  rotate_users_count: number,
  baseinfo: {
    video_id: string,
    title: string,
    first_retrieve: string,
    description: string,
    genre: string,
    length: string,
    tags: string[],
    thumbnail_url: string,
    view_counter: string,
    comment_num: string,
    mylist_counter: string,
    embeddable: string,
    no_live_play: string,
    user_id: string,
    user_icon_url: string,
    user_nickname: string
  },
  colors: `#${string}`[],
  presenter_users_count: number,
  belt_message: string | null,
  now_message: string | null,
  rotate_action: string | null,
  bpm: number,
  display_playlist_link: boolean
};
