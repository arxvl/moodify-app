import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const emotionEmojis = {
    happy: "😊",
    sad: "😢",
    angry: "😡",
    surprised: "😲",
    neutral: "😐",
    disgusted: "🤢",
};

export default function EmotionDetector({ onEmotionDetected }) {
    const videoRef = useRef();
    const [status, setStatus] = useState("Detecting...");
    const intervalRef = useRef(null);

    useEffect(() => {
        const loadModels = async () => {
            try {
            await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
            await faceapi.nets.faceExpressionNet.loadFromUri("/models");
            startVideo();
            } catch (error) {
            console.error("Error loading models:", error);
            setStatus("Error loading AI models");
            }
        };

        const startVideo = () => {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => {
                console.error("Error accessing camera:", error);
                setStatus("Camera access denied");
            });
        };

        loadModels();

        return () => {
            if (intervalRef.current) {
            clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleVideoPlay = () => {
        intervalRef.current = setInterval(async () => {
            if (!videoRef.current) return;

            try {
            const detections = await faceapi
                .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceExpressions();

            if (detections && detections.expressions) {
                const sorted = Object.entries(detections.expressions).sort(
                (a, b) => b[1] - a[1]
                );
                const topEmotion = sorted[0][0];
                onEmotionDetected(topEmotion);
                setStatus(`You look ${topEmotion}! ${emotionEmojis[topEmotion] || ""}`);
            } else {
                setStatus("No face detected");
            }
            } catch (error) {
            console.error("Error detecting emotion:", error);
            setStatus("Detection error");
            }
        }, 2000); // check every 2s
    };

    return (
        <div className="flex flex-col items-center space-y-2 m-10">
            <video
            ref={videoRef}
            autoPlay
            muted
            width="800"
            height="700"
            onPlay={handleVideoPlay}
            className="rounded-lg shadow-md"
            />
            <p className="mt-10 text-base font-semibold font-color-status bg-gray-100 px-3 py-1 rounded-full shadow font-sour-gummy">
            {status}
            </p>
        </div>
    );
}