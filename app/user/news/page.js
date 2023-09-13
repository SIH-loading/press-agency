"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "@/public/final.mp4";
const VideoPlayer = () => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://v1.nocodeapi.com/ayush_testserver/vimeo/NfhTonsLdgllQOwb/videos"
  //     );
  //     const fetchedData = response.data;

  //     if (fetchedData && fetchedData.data && Array.isArray(fetchedData.data)) {
  //       setApiData(fetchedData.data);
  //       setDuration(fetchedData.data[0].duration);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
    setDuration(progress.loadedSeconds); // This can be loaded or played seconds
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="min-h-screen bg-teal-300 flex justify-center items-center flex-col">
      <h1>Hi, I'm a video player</h1>
      <ReactPlayer
        // url={`https://v1.nocodeapi.com/ayush_testserver/vimeo/NfhTonsLdgllQOwb/videos/${vimeoVideoId}`}
        url="video"
        playing={playing}
        volume={volume}
        playbackRate={playbackRate}
        onProgress={handleProgress}
        className="border-4"
      />

      <div className="mt-4">
        <button onClick={() => setPlaying(!playing)} className="border-2 p-2">
          {playing ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <div>
          Current Time: {formatTime(currentTime)} Duration:{" "}
          {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
