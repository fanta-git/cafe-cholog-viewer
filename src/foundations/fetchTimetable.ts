import { RetrunCafeSongWithComment, User } from "@/types/kiiteapi";

export type TimetableSong = RetrunCafeSongWithComment & {
  rotateUsers?: number[];
  priorityUser?: User;
};

export default async function fetchTimetable (): Promise<TimetableSong[]> {
  const timetable: RetrunCafeSongWithComment[] = await fetch("/@cafe-api/cafe/timetable?limit=10&with_comment=1")
    .then((res) => res.json());
  const rotateUsers: Record<string, number[] | undefined> = await fetch(`/@cafe-api/cafe/rotate_users?ids=${timetable.map(v => v.id)}`)
    .then((res) => res.json());

  const priorityUserIds = [...new Set(timetable.flatMap(({ reasons: [mainReason] }) =>
    mainReason.type === "priority_playlist" ? [mainReason.user_id] : []
  ))];
  const priorityUsersArr: User[] = await fetch(`/@cafe-api/kiite_users?user_ids=${priorityUserIds}`)
    .then((res) => res.json());
  const users = new Map(priorityUsersArr.map(v => [v.user_id, v]));

  return timetable.map(v => ({
    ...v,
    rotateUsers: rotateUsers[v.id],
    priorityUser: users.get(v.reasons[0].user_id)
  }));
}
