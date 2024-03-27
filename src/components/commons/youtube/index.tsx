import YouTube, { type YouTubeProps } from "react-youtube";
import type { IYoutubeProps } from "./Youtube.types";

const Youtube = (props: IYoutubeProps): JSX.Element => {
  const youtubeUrl = props.youtubeUrl
    .replace("https://www.youtube.com/", "")
    .split("&")[0]
    .replace("watch?v=", "");

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube videoId={youtubeUrl} opts={opts} onReady={onPlayerReady}></YouTube>
  );
};

export default Youtube;
