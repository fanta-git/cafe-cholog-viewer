import { Center } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Source (props: Props) {
  const { song } = props;

  return (
    <Center w={"100%"} h={"100%"}>
      ↗︎
    </Center>
  );
}
