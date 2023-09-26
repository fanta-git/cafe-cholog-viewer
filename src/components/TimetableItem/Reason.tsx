import { Image } from "@/chakra-ui/next-js";
import { HStack, Link, Text } from "@/chakra-ui/react";
import { reason_icon } from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Reason (props: Props) {
  const { song } = props;

  // 現状コメント無しのユーザーの情報は取得できない
  const [mainReason] = song.reasons;
  const hasUserData = mainReason.type === "priority_playlist" && mainReason.user != null;
  if (!hasUserData) return;

  const listUrl = `https://kiite.jp/playlist/${mainReason.list_id}`;

  return (
    <HStack px={"10px"} gap={"5px"}>
      <Image src={mainReason.user.avatar_url} alt={mainReason.user.nickname} {...reason_icon} />
      <Text>
        <Link href={mainReason.list_id} fontWeight={"bold"} color={"#ffef00"} isExternal>{mainReason.user.nickname}</Link>
        さんの
        <Link href={listUrl} fontWeight={"bold"} color={"#00ffff"} isExternal>
          イチ推しリスト
        </Link>
        の曲です
      </Text>
    </HStack>
  );
}
