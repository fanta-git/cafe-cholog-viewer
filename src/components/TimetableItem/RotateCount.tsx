import { HStack, Mark, Text } from "@/chakra-ui/react";
import { TimetableSong } from "@/foundations/fetchTimetable";

type Props = {
  song: TimetableSong;
};

export default function RotateCount (props: Props) {
  const { song } = props;

  const rotateCount = song.rotateUsers?.length ?? 0;

  if (rotateCount === 0) return <></>;

  return (
    <HStack gap={"5px"}>
      <Mark fontWeight={"bold"} color={"#ffef00"}>回</Mark>
      <Text>{rotateCount}</Text>
    </HStack>
  );
}
