import { Box, Center, Grid, GridItem, HStack } from "@/chakra-ui/react";
import * as s from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import { getTimestampStr } from "@/util/time";
import Image from "./Image";
import Link from "next/link";

type Props = {
  song: RetrunCafeSongWithComment;
};

export default function SongCard (props: Props) {
  const { song } = props;
  const diffTime = Date.now() - new Date(song.start_time).getTime();
  const timestampStr = getTimestampStr(diffTime);

  // 現状コメント無しのユーザーの情報は取得できない
  const [mainReason] = song.reasons;
  const hasUserData = mainReason.type === "priority_playlist" && mainReason.user != null;

  return (
    <HStack {...s.wrapperStack}>
      <Box {...s.thumbnailWrapperBox} >
        <Image src={song.thumbnail} alt={song.title} {...s.thumbnailImage} />
      </Box>
      <Grid {...s.musicInfoGrid}>
        <GridItem area={"time"}>
          <Center {...s.timestampCenter}>
            {timestampStr}
          </Center>
        </GridItem>
        <GridItem area={"reas"}>
          {hasUserData && <Box {...s.reason}>
            <Box {...s.reason_icon} backgroundImage={mainReason.user.avatar_url}></Box>
            <Link style={{ color: "#ffef00" }} href={mainReason.list_id} target="_blank">{mainReason.user.nickname}</Link>
            さんの
            <Link style={{ color: "cyan" }} href={`https://kiite.jp/playlist/${mainReason.list_id}`} target="_blank">イチ推しリスト</Link>
            の曲です
          </Box>}
        </GridItem>
        <GridItem area={"titl"}>
          <Box {...s.title}>
            {song.title}
          </Box>
        </GridItem>
        <GridItem area={"arti"}>
          <Box {...s.artist}><Box as={"span"} {...s.artist_span}>{song.artist_name}</Box></Box>
        </GridItem>
        <GridItem area={"rota"}>
          回 {10}
        </GridItem>
        <GridItem area={"fave"}>
          ♡ {10}
        </GridItem>
        <GridItem area={"sour"}>

        </GridItem>
      </Grid>
    </HStack>
  );
}
