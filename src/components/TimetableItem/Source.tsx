import { MdOpenInNew } from "@/chakra-ui/mdIcons";
import { Link } from "@/chakra-ui/next-js";
import { Center, Icon } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Source (props: Props) {
  const { song } = props;

  const searchUrl = `https://kiite.jp/search/song?keyword=${song.baseinfo.video_id}`;

  return (
    <Center w={"100%"} h={"100%"}>
      <Link href={searchUrl} color={"#aaaaaa"} _hover={{ color: "#ffffff" }} isExternal>
        <Icon boxSize={5} as={MdOpenInNew} />
      </Link>
    </Center>
  );
}
