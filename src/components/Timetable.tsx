"use client";

import { VStack } from "@/chakra-ui/react";
import fetchTimetable, { TimetableSong } from "@/foundations/fetchTimetable";
import { useEffect, useState } from "react";
import TimetableItem from "./TimetableItem";

export default function Timetable () {
  const [timetable, setTimetable] = useState<TimetableSong[]>();

  useEffect(() => {
    fetchTimetable()
      .then(setTimetable);
  }, []);

  if (timetable === undefined) return (<>Loading...</>);

  return (
    <VStack w={"100%"}>
      {timetable.map(v => (
        <TimetableItem key={v.id} song={v} />
      ))}
    </VStack>
  );
}
