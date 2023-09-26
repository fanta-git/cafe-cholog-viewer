import { Grid, GridItem, HStack } from "@/chakra-ui/react";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import Artist from "./Artist";
import FavCount from "./FavCount";
import Reason from "./Reason";
import RotateCount from "./RotateCount";
import Source from "./Source";
import Thumbnail from "./Thumbnail";
import Timestamp from "./Timestamp";
import Title from "./Title";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function SongCard (props: Props) {
  const { song } = props;

  return (
    <HStack width={"100%"} alignItems={"flex-start"} fontSize={"12px"}>
      <Thumbnail song={song} />
      <Grid
        w={"100%"}
        bgColor={"rgba(0, 0, 0, 0.8)"}
        color={"white"}
        p={"8px 15px 5px"}
        gridTemplateColumns={"58px 5fr 1fr 1fr 20px"}
        gridTemplateRows={"22px repeat(2, auto)"}
        gridTemplateAreas={`
          "time reas reas reas sour"
          "titl titl titl titl sour"
          "arti arti rota fave sour"
        `}
      >
        <GridItem area={"time"}>
          <Timestamp song={song} />
        </GridItem>
        <GridItem area={"reas"}>
          <Reason song={song} />
        </GridItem>
        <GridItem area={"titl"}>
          <Title song={song} />
        </GridItem>
        <GridItem area={"arti"}>
          <Artist song={song} />
        </GridItem>
        <GridItem area={"rota"}>
          <RotateCount song={song} />
        </GridItem>
        <GridItem area={"fave"}>
          <FavCount song={song} />
        </GridItem>
        <GridItem area={"sour"}>
          <Source song={song} />
        </GridItem>
      </Grid>
    </HStack>
  );
}
