import { Link } from "@/chakra-ui/next-js";

type Props = {
  artistId: number;
  artistName: string;
};

export default function Artist (props: Props) {
  const { artistId, artistName } = props;

  return (
    <Link
      href={`/api/artist/${artistId}`}
      width={"fit-content"}
      color={"#aaaaaa"}
      _hover={{ color: "#ffffff", textDecoration: "underline" }}
      isExternal
    >
      {artistName}
    </Link>
  );
}
