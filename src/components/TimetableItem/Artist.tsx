import { Link } from "@/chakra-ui/next-js";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
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
