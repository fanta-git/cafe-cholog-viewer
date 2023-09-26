import { Box } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Artist (props: Props) {
  const { song } = props;

  return (
    <Box as={"span"} color={"#aaaaaa"}>
      {song.artist_name}
    </Box>
  );
}
