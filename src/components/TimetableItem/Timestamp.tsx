import { Center } from "@/chakra-ui/react";
import { timestampCenter } from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import { getTimestampStr } from "@/util/time";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Timestamp (props: Props) {
  const { song } = props;
  const diffTime = Date.now() - new Date(song.start_time).getTime();
  const timestampStr = getTimestampStr(diffTime);

  return (
    <Center w={"100%"} h={"100%"}>
      <Center {...timestampCenter}>
        {timestampStr}
      </Center>
    </Center>
  );
}
