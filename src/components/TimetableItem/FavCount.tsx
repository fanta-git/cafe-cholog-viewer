import { MdFavorite } from "@/chakra-ui/mdIcons";
import { AbsoluteCenter, Box, Center, HStack, Icon, Text } from "@/chakra-ui/react";
import { TimetableSong } from "@/foundations/fetchTimetable";

type Props = {
  song: TimetableSong;
};

export default function FavCount (props: Props) {
  const { song } = props;

  const favCount = song.new_fav_user_ids?.length ?? 0;
  if (favCount === 0) return <></>;

  return (
    <HStack gap={"5px"}>
      <Box position={"relative"} w={2}>
        <Center w={"100%"} h={"100%"}>
          <Icon as={MdFavorite} boxSize={4} opacity={0.5} color={"#ff33aa"} />
          <AbsoluteCenter>
            <Icon as={MdFavorite} boxSize={2} color={"#ff33aa"} />
          </AbsoluteCenter>
        </Center>
      </Box>
      <Text>{favCount}</Text>
    </HStack>
  );
}
