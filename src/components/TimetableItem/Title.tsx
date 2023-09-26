import { Box } from "@/chakra-ui/react";
import { title } from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Title (props: Props) {
  const { song } = props;

  return (
    <Box {...title}>
      {song.title}
    </Box>
  );
}
