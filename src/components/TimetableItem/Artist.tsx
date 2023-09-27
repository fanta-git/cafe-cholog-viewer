import { Link } from "@/chakra-ui/next-js";
import { TimetableSong } from "@/foundations/fetchTimetable";

type Props = {
  song: TimetableSong;
};

export default function Artist (props: Props) {
  const { song } = props;

  return (
    <Link
      href={`/api/artist/${song.artist_id}`}
      width={"fit-content"}
      color={"#aaaaaa"}
      _hover={{ color: "#ffffff", textDecoration: "underline" }}
      isExternal
    >
      {song.artist_name}
    </Link>
  );
}
