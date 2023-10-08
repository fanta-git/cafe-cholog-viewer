import { Center } from "@/chakra-ui/react";
import { getTimestampStr } from "@/util/time";

type Props = {
  startTime: string;
};

export default function Timestamp (props: Props) {
  const { startTime } = props;
  const diffTime = Date.now() - Date.parse(startTime);
  const timestampStr = getTimestampStr(diffTime);

  return (
    <Center w={"100%"} h={"100%"}>
      <Center h={"18px"} w={"58px"} color={"#ffffff"} bg={"#666666"}>
        {timestampStr}
      </Center>
    </Center>
  );
}
