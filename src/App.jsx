import React, { useState } from "react";
import EmotionDetector from "./components/EmotionDetector";
import MoodUI from "./components/MoodUI";
import MoodChart from "./components/MoodChart";
import MoodifyLogo from "./components/AppTitle";
import MoodTips from "./components/MoodTips";
import { Footer } from "./components/Footer";

export default function App() {
  const [emotion, setEmotion] = useState("neutral");
  const [history, setHistory] = useState([]);
  const [started, setStarted] = useState(false); // Added state for landing page

  // Add emotion to history when detected
  const handleEmotionDetected = (newEmotion) => {
    setEmotion(newEmotion);
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setHistory((prev) =>
      [
        ...prev,
        {
          emotion: newEmotion,
          time: timeString,
          timestamp: now.getTime(),
        },
      ].slice(-10) // Keep only last 10 entries
    );
  };

  // Landing Page/First Page
  if (!started) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center background-color">
        <div className="absolute top-50 transform -translate-x-1/2 z-20 scale-200">
          <MoodifyLogo />
        </div>
        <p className="mt-3 mb-10 text-xl opacity-90 font-sour-gummy">
          A real-time mood tracking app.
        </p>
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 font-sour-gummy cursor-grab my-button font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Reveal My Mood
        </button>
      </div>
    );
  }

  // Main App
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Dynamic Background */}
      <MoodUI emotion={emotion} />

      {/* Title - positioned at top center */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <MoodifyLogo />
      </div>

      {/* Main Content Container */}
      <div className="flex-grow grid grid-cols-2 grid-rows-[auto_auto_auto] gap-10 mx-20 mt-30">
        {/* Webcam + Emotion Detector */}
        <div className="row-span-3 bg-opacity-90 p-4 rounded-xl shadow-lg backdrop-blur-sm background-color">
          <EmotionDetector onEmotionDetected={handleEmotionDetected} />
        </div>

        {/* Mood Chart */}
        <div className="mt-5 background-chart bg-opacity-90 p-4 rounded-xl shadow-lg backdrop-blur-sm w-[100%] max-w-2xl">
          <h2 className="font-color-chart font-bold text-lg mb-3 text-gray-800 text-center font-slackey">Mood History</h2>
          {history.length > 0 ? (
            <MoodChart history={history} />
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-500">
              <p>Emotion history will appear here...</p>
            </div>
          )}
        </div>

        {/* Mood Recommendation Message */}
        <div className="background-tips bg-opacity-90 p-4 rounded-xl shadow-lg backdrop-blur-sm w-[100%] max-w-2xl">
          <MoodTips emotion={emotion} />
        </div>
      </div>

      {/* Footer */}
      <Footer emotion={emotion} />
    </div>
  );
}