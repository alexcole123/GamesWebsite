import React, { useState } from 'react';
import './games.css'; // Assuming this is your CSS file

import gameSource1 from '../../Assets/images/CODMW3.webp';
import gameSource2 from '../../Assets/images/FC24.webp';
import gameSource3 from '../../Assets/images/Forza5.webp';
import gameSource4 from '../../Assets/images/GOW.webp';
import gameSource5 from '../../Assets/images/GTAV.webp';
import gameSource6 from '../../Assets/images/NFSU.webp';
import gameSource7 from '../../Assets/images/NFSU2.webp';
import gameSource8 from '../../Assets/images/diablo 4.webp';
import gameSource9 from '../../Assets/images/starcraft.webp';
import gameSource10 from '../../Assets/images/halo.webp';

export function Games(): JSX.Element {
    const arr = [
        gameSource1, gameSource2, gameSource3, gameSource4,
        gameSource5, gameSource6, gameSource7, gameSource8,
        gameSource9, gameSource10
    ];
    const descriptions = [
        "Step into the future of gaming with Call of Duty Modern Warfare III. Prepare for an unmatched gaming experience as you engage in an all-new Campaign.",
        "Welcome to the Club",
        "Forza Horizon 5 Standard Edition Features Your New Horizons See Mexico's vast open world in hundreds of the world's best automobiles, and lead magnificent journeys",
        "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go",
        "The biggest, most dynamic and most diverse open world ever created and now packed with layers of new detail.",
        "EA GAMES' vaunted Need for Speed series, which first hit the gas in 1995 on the 3DO platform, continues with the multi-platform release of Need for Speed: Underground.",
        "Discover the living, breathing world of tuner culture in Need for Speed Underground 2, the sequel to the best-selling racing game of 2003.",
        "Unleash Hell: Diablo IV Immerse Yourself in Darkness and Battle the Forces of Evil Welcome to the realm of eternal conflict in Diablo IV",
        "The story of StarCraft is presented through its instruction manual, the briefings to each mission and conversations within the missions themselves.",
        "Halo: Reach, developed exclusively for Xbox 360 by acclaimed developer Bungie, is the blockbuster prequel to the best-selling Xbox franchise of all time."
    ];

    const [currentGameIndex, setCurrentGameIndex] = useState<number>(0);

    const getRandomIndex = () => {
        return Math.floor(Math.random() * arr.length);
    };

    const randomize = () => {
        const newIndex = getRandomIndex();
        setCurrentGameIndex(newIndex);
    };

    return (
        <div className="games">
            <div>
                <img src={arr[currentGameIndex]} alt={`Game ${currentGameIndex + 1}`} />
                <p>{descriptions[currentGameIndex]}</p>
            </div>
            <button onClick={randomize}>Randomize</button>
        </div>
    );
}
