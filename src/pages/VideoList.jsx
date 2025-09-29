import { Link } from "react-router-dom";
import videos from "../videos";

function VideoList() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-gray-800 rounded-lg shadow hover:scale-105 transition p-4"
        >
          <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
          <video src={video.src} className="w-full rounded mb-2" controls />

          <Link
            to={`/video/${video.id}`}
            className="block text-center bg-green-600 py-2 rounded mt-2 hover:bg-green-700 
                       text-white font-semibold drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] 
                       hover:drop-shadow-[0_0_20px_rgba(0,255,0,1)] transition-all duration-300"
          >
            Watch
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
