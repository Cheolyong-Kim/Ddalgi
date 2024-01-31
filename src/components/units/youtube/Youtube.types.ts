import type { YouTubeProps } from "react-youtube";

export interface IYoutubeProps {
  youtubeUrl: string;
}

export interface IYoutubeUIProps {
  youtubeUrl: string;
  opts: YouTubeProps["opts"];
  onPlayerReady: YouTubeProps["onReady"];
}
