import { Link } from "@/chakra-ui/next-js";
import { HStack, Text } from "@/chakra-ui/react";
import Image from "@/components/Image";
import { SelectReasonsWithComment, User } from "@/types/kiiteapi";

type Props = {
  mainReason: SelectReasonsWithComment;
  priorityUser: User | undefined;
};

export default function Reason (props: Props) {
  const { mainReason, priorityUser } = props;

  if (mainReason.type !== "priority_playlist" || priorityUser === undefined) return;

  const userUrl = `https://kiite.jp/user/${priorityUser.user_name}`;
  const listUrl = `https://kiite.jp/playlist/${mainReason.list_id}`;

  return (
    <HStack px={"10px"} gap={"5px"}>
      <Image
        src={priorityUser.avatar_url}
        alt={priorityUser.nickname}
        width={22}
        height={22}
        borderRadius={"50%"}
      />
      <Text>
        <Link href={userUrl} fontWeight={"bold"} color={"#ffef00"} isExternal>
          {priorityUser.nickname}
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
