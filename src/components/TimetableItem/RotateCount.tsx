import { Text } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function RotateCount (props: Props) {
  const { song } = props;

  return (
    <Text>
      回 {10}
    </Text>
  );
}
