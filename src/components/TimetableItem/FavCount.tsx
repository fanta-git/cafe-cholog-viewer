import { Text } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function FavCount (props: Props) {
  const { song } = props;

  return (
    <Text>
      ♡ {song.new_fav_user_ids?.length ?? 0}
    </Text>
  );
}
