import SongCard from "@/compornents/SongCard";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

export default async function Home() {
  const timetable: RetrunCafeSongWithComment[] = await fetch("https://cafeapi.kiite.jp/api/cafe/timetable?limit=10&with_comment=1")
    .then((res) => res.json());

  return (
    <>
      {timetable.map(v => (
        <SongCard key={v.id} song={v} />
      ))}
    </>
  );
}
