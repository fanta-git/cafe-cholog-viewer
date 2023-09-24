import { Box, Grid, GridItem, HStack } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import Image from "./Image";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function SongCard (props: Props) {
  const { song } = props;

  return (
    <HStack w={"100%"} alignItems={"flex-start"}>
      <Box
        h={"60px"}
        w={"60px"}
        overflow={"hidden"}
        borderRadius={"20%"}
        flexShrink={0}
      >
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
      <Grid
        padding={"10px 15px 5px"}
        gridTemplateColumns={"58px 5fr 1fr 1fr 20px"}
        gridTemplateRows={"18px 18px 18px"}
        rowGap={"3px"}
        gridTemplateAreas={`
          "time reas reas reas sour"
          "titl titl titl titl sour"
          "arti arti rota fave sour"
        `} bgColor={"rgba(0, 0, 0, 0.8)"} color={"white"} w={"100%"}
      >
        <GridItem gridArea={"time"} bgColor={"#EFB4EA"}>

        </GridItem>
        <GridItem gridArea={"reas"} bgColor={"#E9DD51"}>

        </GridItem>
        <GridItem gridArea={"titl"} bgColor={"#E4BFFA"}>

        </GridItem>
        <GridItem gridArea={"arti"} bgColor={"#168F4D"}>

        </GridItem>
        <GridItem gridArea={"rota"} bgColor={"#DB4056"}>

        </GridItem>
        <GridItem gridArea={"fave"} bgColor={"#BE6B69"}>

        </GridItem>
        <GridItem gridArea={"sour"} bgColor={"#5B9C70"}>

        </GridItem>
      </Grid>
    </HStack>
  );
}
