import { Grid, GridItem, HStack } from "@/chakra-ui/react";
import { TimetableSong } from "@/foundations/fetchTimetable";
import Artist from "./Artist";
import FavCount from "./FavCount";
import Reason from "./Reason";
import RotateCount from "./RotateCount";
import Source from "./Source";
import Thumbnail from "./Thumbnail";
import Timestamp from "./Timestamp";
import Title from "./Title";

type Props = {
  isLogdata: false;
  song: TimetableSong;
} | {
  isLogdata: true;
  song: ViewerApiResult;
};

export default function SongCard (props: Props) {
  const { isLogdata, song } = props;

  return (
    <HStack width={"100%"} alignItems={"flex-start"} fontSize={"12px"}>
      <Thumbnail title={song.title} thumbnail={song.thumbnail} />
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
          <Timestamp startTime={song.start_time} />
        </GridItem>
        <GridItem area={"reas"}>
          {isLogdata ||
            <Reason mainReason={song.reasons[0]} priorityUser={song.priorityUser} />
          }
        </GridItem>
        <GridItem area={"titl"}>
          <Title title={song.title} />
        </GridItem>
        <GridItem area={"arti"}>
          <Artist artistId={song.artist_id} artistName={song.artist_name} />
        </GridItem>
        <GridItem area={"rota"}>
          <RotateCount rotateCount={isLogdata ? song.rotate_users_count : song.rotateUsers?.length ?? 0} />
        </GridItem>
        <GridItem area={"fave"}>
          <FavCount favCount={isLogdata ? song.new_fav_users_count : song.new_fav_user_ids?.length ?? 0} />
        </GridItem>
        <GridItem area={"sour"}>
          <Source videoId={song.video_id} />
        </GridItem>
      </Grid>
    </HStack>
  );
}
