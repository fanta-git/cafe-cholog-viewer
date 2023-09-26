import { Grid, GridItem, HStack } from "@/chakra-ui/react";
import { musicInfoGrid, wrapperStack } from "@/styles/timetable";
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
    <HStack {...wrapperStack}>
      <Thumbnail song={song} />
      <Grid {...musicInfoGrid}>
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
