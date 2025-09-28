import React from "react";

export default function MoodifyLogo({ className = "w-32 h-auto" }) {
return (
<svg viewBox="0 0 74 14" className={className}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Artboard" transform="translate(-9.000000, -7.000000)">
        <g id="Group-2" transform="translate(9.000000, 7.000000)">
        {/* Removed the black rectangle */}
        <g
            id="Group"
            transform="translate(16.500000, 3.500000)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <polyline className="path" id="m" stroke="#FFD59E" points="0 6.5 0 0.5 3 3.5 6 0.5 6 6.5"></polyline>
            <path
            className="path"
            d="M10,0.5 C11.1045695,0.5 12,1.3954305 12,2.5 L12,4.5 C12,5.6045695 11.1045695,6.5 10,6.5 C8.8954305,6.5 8,5.6045695 8,4.5 L8,2.5 C8,1.3954305 8.8954305,0.5 10,0.5 Z"
            id="o1"
            stroke="#9BDACA"
            ></path>
            <path
            className="path"
            d="M16,0.5 C17.1045695,0.5 18,1.3954305 18,2.5 L18,4.5 C18,5.6045695 17.1045695,6.5 16,6.5 C14.8954305,6.5 14,5.6045695 14,4.5 L14,2.5 C14,1.3954305 14.8954305,0.5 16,0.5 Z"
            id="o2"
            stroke="#9BDACA"
            ></path>
            <path
            className="path"
            d="M20,0.5 L20,6.5 L22,6.5 C23.6568542,6.5 25,5.1568542 25,3.5 C25,1.8431458 23.6568542,0.5 22,0.5 L20,0.5 Z"
            id="d"
            stroke="#D8A7CD"
            ></path>
            <polyline className="path" id="i1" stroke="#FEB4BE" points="27 2.5 27 6.5"></polyline>
            <circle className="path" cx="27" cy="0.8" r="0.3" stroke="#FEB4BE" fill="none"></circle>
            <polyline className="path" id="f" stroke="#FFA685" points="30 6.5 30 0.5 33 0.5"></polyline>
            <polyline className="path" id="f-cross" stroke="#FFA685" points="29 3.5 32 3.5"></polyline>
            <polyline className="path" id="y" stroke="#FFD59E" points="35 2.5 37 6.5 37 8.5"></polyline>
            <polyline className="path" id="y2" stroke="#FFD59E" points="39 2.5 37 6.5"></polyline>
        </g>
        </g>
    </g>
    </g>
</svg>
);
}