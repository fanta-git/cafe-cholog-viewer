"use client";

import { VStack } from "@/chakra-ui/react";
import fetchTimetable from "@/foundations/fetchTimetable";
import { useEffect } from "react";
import { useQuery } from "react-query";
import TimetableItem from "./TimetableItem";

export default function Timetable () {
  const { data: timetable, refetch } = useQuery("timetable", fetchTimetable, {
    cacheTime: Infinity,
    staleTime: Infinity
  });

  const endDuration = timetable && new Date(timetable[0].start_time).getTime() + timetable[0].msec_duration + 5e3 - Date.now();

  useEffect(() => {
    if (endDuration === undefined) return;
    const timeout = setTimeout(() => {
      refetch();
    }, endDuration);

    return () => clearTimeout(timeout);
  }, [endDuration, refetch]);

  if (timetable === undefined) return (<>Loading...</>);

  return (
    <VStack w={"100%"}>
      {timetable.map(v => (
        <TimetableItem key={v.id} song={v} />
      ))}
    </VStack>
  );
}
