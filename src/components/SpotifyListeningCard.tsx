import { getCurrentListening } from "@/app/actions/spotify";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDictionary } from "@/app/dictionaries";
import { XIcon } from "lucide-react";

export default function SpotifyListeningCard({ params: { lang } }: any) {
  const dict = getDictionary(lang);
  const [close, setClose] = useState(false);

  interface ITrack {
    is_playing: boolean;
    progress_ms: number;
    currently_playing_type: string;
    item: {
      album: {
        images: {
          url: string;
        }[];
      };
      name: string;
      artists: {
        name: string;
      }[];
    };
  }

  const [track, setTrack] = useState<ITrack>();

  useEffect(() => {
    async function fetchCurrentTrack() {
      const track = await getCurrentListening();
      setTrack(track);
    }

    fetchCurrentTrack();
  }, []);

  if (!track || !track.is_playing || close || track.currently_playing_type !== "track") {
    return null;
  }

  return (
    <div className="flex items-center p-4 bg-white dark:bg-black lg:w-full fixed z-10 bottom-4 right-4 rounded-lg shadow-md max-w-md">
      <button
        onClick={() => setClose(true)}
        className="absolute top-2 right-2 p-1 "
      >
        <XIcon className="w-4 h-4 text-gray-600 dark:text-white" />
      </button>
      {track.item.album.images.length > 0 && (
        <Image
          src={track.item.album.images[0].url}
          alt={track.item.name}
          width={50}
          height={50}
          className="rounded-lg shadow-md mr-4"
        />
      )}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-800 dark:text-white">
          {dict.spotify.currentPlaying} {track.item.name}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {dict.spotify.on} Spotify · {track.item.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
