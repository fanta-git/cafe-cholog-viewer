"use client";

import { Button, HStack, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Timetable from "./Timetable";

type Props = {};

export default function Main (props: Props) {
  const {  } = props;
  const [startDate, setStartDate] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <>
      <HStack w={"100%"}>
        <Input type="datetime-local" w={"100%"} ref={inputRef} />
        <Button colorScheme="blue" onClick={() => setStartDate(inputRef.current.value)}>検索</Button>
      </HStack>
      <Timetable startDate={startDate} />
    </>
  );
}
