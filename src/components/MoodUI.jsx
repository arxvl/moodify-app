import React from "react";
import { motion } from "framer-motion";

const moodColors = {
    happy: "#F6F193",   // yellow
    sad: "#3D87FF",     // blue
    angry: "#FF3D3D",   // red
    surprised: "#9B5DE5", // purple
    neutral: "#e1ebf5", // white
    disgusted: "#8FBC8F", // greenish
};

export default function MoodUI({ emotion }) {
    return (
    <motion.div
        className="absolute inset-0"
        style={{ height: "100vh", width: "100vw" }} // Full viewport
        animate={{ backgroundColor: moodColors[emotion] || "#A1A1A1" }}
        transition={{ duration: 0.8 }}
    />
    );
}