import { Link } from "@/chakra-ui/next-js";
import { Box, Center, Grid, GridItem, HStack, Text } from "@/chakra-ui/react";
import * as s from "@/styles/timetable";
import { RetrunCafeSongWithComment } from "@/types/kiiteapi";
import { getTimestampStr } from "@/util/time";
import Image from "./Image";

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
          {hasUserData && (
            <HStack px={"10px"} gap={"5px"}>
              <Image src={mainReason.user.avatar_url} alt={mainReason.user.nickname} {...s.reason_icon} />
              <Text>
                <Link href={mainReason.list_id} fontWeight={"bold"} color={"#ffef00"} isExternal>{mainReason.user.nickname}</Link>
                さんの
                <Link href={`https://kiite.jp/playlist/${mainReason.list_id}`} fontWeight={"bold"} color={"#00ffff"} isExternal>
                  イチ推しリスト
                </Link>
                の曲です
              </Text>
            </HStack>
          )}
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
