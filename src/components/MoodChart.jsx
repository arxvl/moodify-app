import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const emotionMap = {
    happy: 6,
    surprised: 5,
    neutral: 4,
    sad: 3,
    disgusted: 2,
    angry: 1, 
};

const emotionLabels = {
    6: "Happy",
    5: "Surprised",
    4: "Neutral",
    3: "Sad",
    2: "Disgusted",
    1: "Angry", 
};

export default function MoodChart({ history }) {
    const chartData = history.map((entry, index) => ({
    time: entry.time || `${index + 1}`,
    emotion: emotionMap[entry.emotion] || 4, // Default to "Neutral"
    }));

    return (
        <div className="w-full h-56 font-sour-gummy">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 40, bottom: 20 }}>
                <CartesianGrid stroke="#8EACCD" strokeDasharray="5 5" />
                <XAxis 
                dataKey="time" 
                fontSize={12}
                tick={{ fill: '#666' }}
                />
                <YAxis
                ticks={[1, 2, 3, 4, 5, 6]} 
                domain={[1, 6]} 
                tickFormatter={(val) => emotionLabels[val]}
                fontSize={12}
                tick={{ fill: '#666' }}
                />
                <Tooltip 
                formatter={(val) => [emotionLabels[val], "Emotion"]}
                labelStyle={{ color: '#333' }}
                contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                }}
                />
                <Line 
                type="monotone" 
                dataKey="emotion" 
                stroke="#295F98" 
                strokeWidth={3}
                dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}