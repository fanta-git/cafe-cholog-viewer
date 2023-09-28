import { RetrunCafeSongWithComment, User } from "@/types/kiiteapi";
import axios from "axios";

export type TimetableSong = RetrunCafeSongWithComment & {
  rotateUsers?: number[];
  priorityUser?: User;
};

export default async function fetchTimetable (): Promise<TimetableSong[]> {
  const { data: timetable } = await axios.get<RetrunCafeSongWithComment[]>("https://cafe.kiite.jp/api/cafe/timetable", {
    params: {
      limit: 10,
      with_comment: 1
    }
  });
  const { data: rotateUsers } = await axios.get<Record<string, number[] | undefined>>("https://cafe.kiite.jp/api/cafe/rotate_users", {
    params: { ids: timetable.map(v => v.id).join(",") }
  });

  const priorityUserIds = [...new Set(timetable.flatMap(({ reasons: [mainReason] }) =>
    mainReason.type === "priority_playlist" ? [mainReason.user_id] : []
  ))];
  const { data: priorityUsersArr } = await axios.get<User[]>("https://cafe.kiite.jp/api/kiite_users", {
    params: { user_ids: priorityUserIds.join(",") }
  });
  const users = new Map(priorityUsersArr.map(v => [v.user_id, v]));

  return timetable.map(v => ({
    ...v,
    rotateUsers: rotateUsers[v.id],
    priorityUser: users.get(v.reasons[0].user_id)
  }));
}
