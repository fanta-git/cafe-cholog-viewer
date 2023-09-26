import { Image } from "@/chakra-ui/next-js";
import { HStack, Link, Text } from "@/chakra-ui/react";
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

  const userUrl = `https://kiite.jp/user/${mainReason.user.id}`;
  const listUrl = `https://kiite.jp/playlist/${mainReason.list_id}`;

  return (
    <HStack px={"10px"} gap={"5px"}>
      <Image
        src={mainReason.user.avatar_url}
        alt={mainReason.user.nickname}
        width={22}
        height={22}
        borderRadius={"50%"}
      />
      <Text>
        <Link href={userUrl} fontWeight={"bold"} color={"#ffef00"} isExternal>
          {mainReason.user.nickname}
        </Link>
        さんの
        <Link href={listUrl} fontWeight={"bold"} color={"#00ffff"} isExternal>
          イチ推しリスト
        </Link>
        の曲です
      </Text>
    </HStack>
  );
}
