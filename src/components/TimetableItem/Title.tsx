import { Box } from "@/chakra-ui/react";
import { TimetableSong } from "@/foundations/fetchTimetable";

type Props = {
  song: TimetableSong;
};

export default function Title (props: Props) {
  const { song } = props;

  return (
    <Box fontSize={"1.2em"}>
      {song.title}
    </Box>
  );
}
