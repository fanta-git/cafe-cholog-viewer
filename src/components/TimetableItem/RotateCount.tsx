import { HStack, Mark, Text } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function RotateCount (props: Props) {
  const { song } = props;

  const rotateCount = 10 as number;

  if (rotateCount === 0) return <></>;

  return (
    <HStack gap={"5px"}>
      <Mark fontWeight={"bold"} color={"#ffef00"}>回</Mark>
      <Text>{rotateCount}</Text>
    </HStack>
  );
}
