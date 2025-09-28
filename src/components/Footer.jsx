import React from "react";

const moodColors = {
happy: "#F6F193",   // yellow
sad: "#3D87FF",     // blue
angry: "#FF3D3D",   // red
surprised: "#9B5DE5", // purple
neutral: "#e1ebf5", // white
};

export const Footer = ({ emotion }) => {
// Get the background color for the current emotion, default to neutral
const backgroundColor = moodColors[emotion] || "#A1A1A1";

return (
<footer
    className="py-4 px-6 relative mt-20 flex flex-wrap justify-between items-center border-t-0"
    style={{ backgroundColor, color: "#333" }} // Dynamic background color
>
    <p className="font-sour-gummy text-sm">
    &copy; {new Date().getFullYear()} Ankcris Letada. All rights reserved.
    </p>
</footer>
);
};