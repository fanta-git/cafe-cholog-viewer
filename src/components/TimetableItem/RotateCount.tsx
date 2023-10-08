import { HStack, Mark, Text } from "@/chakra-ui/react";

type Props = {
  rotateCount: number;
};

export default function RotateCount (props: Props) {
  const { rotateCount } = props;

  if (rotateCount === 0) return <></>;

  return (
    <HStack gap={"5px"}>
      <Mark fontWeight={"bold"} color={"#ffef00"}>回</Mark>
      <Text>{rotateCount}</Text>
    </HStack>
  );
}
