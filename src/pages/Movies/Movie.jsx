import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the selected video
  const [searchTerm, setSearchTerm] = useState("AI movies");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyB3s5tT6ncJm9nt_IXiD3OcZXDPf9X4KuU";
  const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.get(YOUTUBE_API_URL, {
        params: {
          part: "snippet",
          q: searchTerm,
          maxResults: 5,
          key: API_KEY,
        },
      });

      setVideos(data.items); // Save fetched videos to state
      setSelectedVideo(data.items[0]); // Automatically select the first video
    } catch (err) {
      console.error(err);
      setError("Failed to fetch videos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchTerm]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Videos</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search YouTube videos..."
        className="p-2 border rounded w-full mb-4"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Embedded Video Player */}
      {selectedVideo && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            {selectedVideo.snippet.title}
          </h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title={selectedVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Video Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="border rounded p-4 shadow cursor-pointer"
            onClick={() => setSelectedVideo(video)} // Set the selected video
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="w-full mb-4 rounded"
            />
            <h3 className="text-sm font-semibold">{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
