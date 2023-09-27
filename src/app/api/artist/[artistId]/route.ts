import { notFound, redirect } from "next/navigation";

type Params = {
  params: {
    artistId: string;
  };
};

export async function GET (request: Request, { params }: Params) {
  const artistId = params.artistId;

  const artist: any = await fetch(`https://cafe.kiite.jp/api/artist/id?artist_id=${artistId}`)
    .then((res) => res.json());

  if (artist?.creator_id == null) return notFound();

  return redirect(`https://kiite.jp/creator/${artist.creator_id}`);
}
