import { Box, HStack, Text, VStack } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import Image from "./Image";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function SongCard (props: Props) {
  const { song } = props;

  return (
    <HStack w={"100%"}>
      <Box h={"60px"} w={"60px"} overflow={"hidden"} borderRadius={"20%"}>
        <Image
          src={song.thumbnail}
          alt={song.title}
          width={130}
          height={100}
          w={"100%"}
          h={"100%"}
          objectFit={"contain"}
          transform="scale(1.8)"
          transformOrigin="center"
        />
      </Box>
      <VStack>
        <Text>
          {song.title}
        </Text>
      </VStack>
    </HStack>
  );
}
