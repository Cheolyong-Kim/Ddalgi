import YouTube from "react-youtube";
import type { IYoutubeUIProps } from "./Youtube.types";

const YoutubeUI = (props: IYoutubeUIProps): JSX.Element => {
  return (
    <YouTube
      videoId={props.youtubeUrl}
      opts={props.opts}
      onReady={props.onPlayerReady}
    ></YouTube>
  );
};

export default YoutubeUI;
