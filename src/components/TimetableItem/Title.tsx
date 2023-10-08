import { Box } from "@/chakra-ui/react";

type Props = {
  title: string;
};

export default function Title (props: Props) {
  const { title } = props;

  return (
    <Box fontSize={"1.2em"}>
      {title}
    </Box>
  );
}
