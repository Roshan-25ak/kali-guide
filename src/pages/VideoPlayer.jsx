import { useParams } from "react-router-dom";
import videos from "../videos";

function VideoPlayer() {
  const { id } = useParams();
  const video = videos.find((v) => v.id.toString() === id);

  if (!video) {
    return <h2 className="p-6">Video not found</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
      <video src={video.src} className="w-full rounded mb-4" controls autoPlay />
      <a href={video.src} download className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
        ⬇ Download
      </a>
    </div>
  );
}

export default VideoPlayer;
