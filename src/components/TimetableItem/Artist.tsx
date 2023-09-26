import { Box } from "@/chakra-ui/react";
import { artist, artist_span } from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Artist (props: Props) {
  const { song } = props;

  return (
    <Box {...artist}>
      <Box as={"span"} {...artist_span}>
        {song.artist_name}
      </Box>
    </Box>
  );
}
