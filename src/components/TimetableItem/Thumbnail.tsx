import { Box } from "@/chakra-ui/react";
import Image from "@/components/Image";
import { thumbnailImage, thumbnailWrapperBox } from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function Thumbnail (props: Props) {
  const { song } = props;

  return (
    <Box {...thumbnailWrapperBox} >
      <Image src={song.thumbnail} alt={song.title} {...thumbnailImage} />
    </Box>
  );
}
