"use client";

import fetchTimetable from "@/foundations/fetchTimetable";
import { VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import TimetableItem from "./TimetableItem";

export default function Timetable () {
  const { data: timetable, refetch } = useQuery(["timetable"], fetchTimetable, {
    cacheTime: Infinity,
    staleTime: Infinity,
    suspense: true,
  });

  if (timetable === undefined) throw Error("dammy");
  const endTime = Date.parse(timetable[0].start_time) + timetable[0].msec_duration;

  useEffect(() => {
    const endUntilTime = endTime - Date.now() + 5e3;
    const timeout = setTimeout(refetch, endUntilTime);

    return () => clearTimeout(timeout);
  }, [endTime, refetch]);

  return (
    <VStack w={"100%"}>
      {timetable.map(v => (
        <TimetableItem key={v.id} song={v} />
      ))}
    </VStack>
  );
}
