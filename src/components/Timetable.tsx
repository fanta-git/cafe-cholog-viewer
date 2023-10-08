"use client";

import fetchTimetable, { TimetableSong } from "@/foundations/fetchTimetable";
import fetchTimetableLog from "@/foundations/fetchTimetableLog";
import { Button, Spinner, VStack } from "@chakra-ui/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import TimetableItem from "./TimetableItem";

type Props = {
  startDate?: string;
};

type SongItem = {
  isLogdata: false;
  song: TimetableSong;
} | {
  isLogdata: true;
  song: ViewerApiResult;
};

export default function Timetable (props: Props) {
  const { startDate } = props;
  const [items, setItems] = useState<SongItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const isFirst = useRef(true);
  const onClick = useCallback(() => {
    const lastItem = items.at(-1);
    if (!lastItem) return;
    setIsFetching(true);
    fetchTimetableLog(lastItem.song.start_time, 100)
      .then(timetable => (
        setItems(v => [
          ...v,
          ...timetable.map(v => ({ isLogdata: true, song: v } as const))
        ])
      ))
      .then(() => setIsFetching(false));
  }, [items]);

  useLayoutEffect(() => {
    if (!startDate) return;
    setIsFetching(true);
    fetchTimetableLog(startDate, 100)
      .then(timetable => (
        setItems(timetable.map(v => ({ isLogdata: true, song: v } as const)))
      ))
      .then(() => setIsFetching(false));
  }, [startDate]);

  useLayoutEffect(() => {
    if (!isFirst.current) return;
    isFirst.current = false;

    fetchTimetable(100)
      .then(timetable => (
        setItems(timetable.map(v => ({ isLogdata: false, song: v } as const)))
      ))
      .then(() => setIsFetching(false));
  }, []);

  return (
    <VStack w={"100%"}>
      {items.map((v, i) =>
        <TimetableItem key={i} {...v} />
      )}
      {isFetching
        ? <Spinner />
        : <Button onClick={onClick}>もっと読み込む</Button>
      }
    </VStack>
  );
}
