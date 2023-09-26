import TimetableItem from "@/components/TimetableItem";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

export default async function Home() {
  const timetable: RetrunCafeSongWithComment[] = await fetch("https://cafeapi.kiite.jp/api/cafe/timetable?limit=10&with_comment=1")
    .then((res) => res.json());

  return (
    <>
      {timetable.map(v => (
        <TimetableItem key={v.id} song={v} />
      ))}
    </>
  );
}
