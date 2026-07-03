"use client";

import { getCurrentListening } from "@/app/actions/spotify";
import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [track, setTrack] = useState<{ name: string; artist: string } | null>(null);

  useEffect(() => {
    async function fetch() {
      const data = await getCurrentListening();
      if (data?.is_playing && data?.currently_playing_type === "track") {
        setTrack({
          name: data.item.name,
          artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
        });
      }
    }
    fetch();
  }, []);

  if (!track) return null;

  return (
    <p className="text-xs text-black/30">
      listening to {track.name} · {track.artist}
    </p>
  );
}
