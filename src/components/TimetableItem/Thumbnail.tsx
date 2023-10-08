import { Box } from "@/chakra-ui/react";
import Image from "@/components/Image";

type Props = {
  thumbnail: string;
  title: string;
};

export default function Thumbnail (props: Props) {
  const { thumbnail, title } = props;

  return (
    <Box
      h={"60px"}
      w={"60px"}
      overflow={"hidden"}
      borderRadius={"20%"}
      flexShrink={0}
    >
      <Image
        src={thumbnail}
        alt={title}
        width={130}
        height={100}
        w={"100%"}
        h={"100%"}
        objectFit={"contain"}
        transform={"scale(1.8)"}
        transformOrigin={"center"}
      />
    </Box>
  );
}
