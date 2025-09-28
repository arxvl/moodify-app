import React from "react";

const tips = {
    happy: [
        "Golden laughter blooms like sunflowers chasing tomorrow's dreams.",
        "Joy dances on butterfly wings, painting rainbows in your soul.",
        "Your smile is starlight scattered across the universe's canvas.",
        "Happiness flows like honey through the chambers of your heart.",
        "Bliss whispers secrets that only grateful spirits can hear.",
    ],
    sad: [
        "Tears are silver rivers carving channels for love's return.",
        "Sorrow teaches the heart to hold both moonlight and shadow.",
        "Your breaking is not breaking—it's the sky cracking open for dawn.",
        "Grief is love with nowhere to go but deeper into your bones.",
        "Through autumn's falling leaves, spring whispers promises of rebirth.",
    ],
    angry: [
        "Rage burns like phoenix fire, transforming ash into golden wings.",
        "Your fury is thunder announcing the storm that clears stagnant air.",
        "Anger flows like lava, destroying only to create new fertile ground.",
        "Wrath is passion wearing armor, protecting what matters most.",
        "Lightning courses through your veins, electric with righteous purpose.",
    ],
    surprised: [
        "Wonder strikes like lightning, illuminating paths once hidden in shadow.",
        "Surprise is life's symphony playing notes you never knew existed.",
        "Magic unfolds in the spaces between heartbeats and expectations.",
        "The universe winks through serendipity's gentle, knowing smile.",
        "Astonishment blooms where certainty once built its careful walls.",
    ],
    neutral: [
        "In silence, wisdom weaves threads of possibility through peaceful hours.",
        "Stillness holds galaxies of potential in its quiet embrace.",
        "The calm river knows its power lies not in rushing, but in depth.",
        "Between breaths lives the sacred space where miracles take root.",
        "Tranquil moments are cocoons where transformation dreams itself awake.",
    ],
    disgusted: [
        "Revulsion is your soul's compass spinning toward truer magnetic north.",
        "What repels the spirit clears the garden for worthier blooms.",
        "Disgust burns away illusions like fire purifying precious metals.",
        "Your inner storm knows which trees deserve to be uprooted.",
        "Rejection of the false makes sacred space for authentic light.",
    ],
};

// Function to get a random tip based on the emotion
const getRandomTip = (emotion) => {
    const messages = tips[emotion] || ["Take care of yourself"];
    return messages[Math.floor(Math.random() * messages.length)];
};

export default function MoodTips({ emotion }) {
    return (
        <div className="w-full h-30 text-center font-sour-gummy">
            <p className="font-semibold font-color-tips text-lg mt-20">
            {getRandomTip(emotion)}
            </p>
        </div>
    );
}