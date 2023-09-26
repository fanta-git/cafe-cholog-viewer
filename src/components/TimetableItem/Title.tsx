import { Box } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Title (props: Props) {
  const { song } = props;

  return (
    <Box fontSize={"1.2em"}>
      {song.title}
    </Box>
  );
}
