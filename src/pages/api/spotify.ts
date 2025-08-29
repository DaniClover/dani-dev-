import type { APIRoute } from "astro";

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

export const GET: APIRoute = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    return new Response(JSON.stringify({ error: "Missing Spotify env vars." }), { status: 500 });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const refresh = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const response = await refresh.json();

  const song = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${response.access_token}` },
  });

  if (song.status === 204 || song.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), { status: 200 });
  }

  const data = await song.json();

  return new Response(
    JSON.stringify({
      isPlaying: data.is_playing,
      song: data.item?.name,
      artist: data.item?.artists?.map((a: any) => a.name).join(", "),
      albumArt: data.item?.album?.images?.[0]?.url,
    }),
    { status: 200 }
  );
};
