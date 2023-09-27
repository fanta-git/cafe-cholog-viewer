import { Center } from "@/chakra-ui/react";
import { TimetableSong } from "@/foundations/fetchTimetable";
import { getTimestampStr } from "@/util/time";

type Props = {
  song: TimetableSong;
};

export default function Timestamp (props: Props) {
  const { song } = props;
  const diffTime = Date.now() - new Date(song.start_time).getTime();
  const timestampStr = getTimestampStr(diffTime);

  return (
    <Center w={"100%"} h={"100%"}>
      <Center h={"18px"} w={"58px"} color={"#ffffff"} bg={"#666666"}>
        {timestampStr}
      </Center>
    </Center>
  );
}
