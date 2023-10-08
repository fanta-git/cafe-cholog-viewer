import fetchTimetable from "@/foundations/fetchTimetable";
import { VStack } from "@chakra-ui/react";
import TimetableItem from "./TimetableItem";
import fetchTimetableLog from "@/foundations/fetchTimetableLog";

export default async function Timetable () {
  const timetable = await fetchTimetableLog("2023-10-01T00:00:00+09:00");

  return (
    <VStack w={"100%"}>
      {timetable.map(v => (
        <TimetableItem key={v.id} isLogdata={true} song={v} />
      ))}
    </VStack>
  );
}
