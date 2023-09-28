import fetchTimetable from "@/foundations/fetchTimetable";
import { VStack } from "@chakra-ui/react";
import TimetableItem from "./TimetableItem";

export default async function Timetable () {
  const timetable = await fetchTimetable();

  return (
    <VStack w={"100%"}>
      {timetable.map(v => (
        <TimetableItem key={v.id} song={v} />
      ))}
    </VStack>
  );
}
