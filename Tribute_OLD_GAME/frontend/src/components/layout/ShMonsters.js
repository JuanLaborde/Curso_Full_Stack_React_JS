import React, { useState } from 'react';

function SliderSH() {
    const [id, setId] = useState(0);
    const data = [
        [
            "Amnion",
            "Asphyxia",
            "Bubble-Head-Nurse",
            "Doll",
            "Feral",
            "Ghost",
            "Greedy-Worm",
            "Grey-Child",
            "groaner",
            "Gum-Heads",
            "Incubus",
            "insane-Cancer",
            "Lurker",
            "Mumbler",
            "Needler",
            "Night-flutter",
            "Patient",
            "Prisoner-Minion",
            "Pyramid-Head",
            "Romper",
            "Scarlet",
            "Schism",
            "Screamer",
            "Sepulcher",
            "Siam",
            "Slurper",
            "Sniffer-Dog",
            "Split-Worm",
            "The-Bogeyman",
            "The-Wheelman",
            "Twin-Victims",
            "Weeping-Bat",            
        ],
        [
            "Amnion",
            "Asphyxia",
            "Bubble Head Nurse",
            "Doll",
            "Feral",
            "Ghost",
            "Greedy Worm",
            "Grey Child",
            "Groaner",
            "Gum Heads",
            "Incubus / Samael",
            "Insane Cancer",
            "Lurker",
            "Mumbler",
            "Needler",
            "Night Flutter",
            "Patient",
            "Prisoner Minion",
            "Pyramid Head",
            "Romper",
            "Scarlet",
            "Schism",
            "Screamer",
            "Sepulcher",
            "Siam",
            "Slurper",
            "Sniffer Dog",
            "Split Worm",
            "The Bogeyman",
            "The Wheelman",
            "Twin Victims",
            "Weeping Bat",       
        ],

        [
            "Guilty feeling  -  Silent Hill Homecoming",
            "Nora sacrificed for the cult  -  Silent Hill Homecoming",
            "Fear of madness and death.  -  Silent Hill",
            "Murdered prostitutes  -  Silent Hill Downpour",
            "Animals skinned by the cult  -  Silent Hill Homecoming",
            "Victims of Walter Sullivan  -  Silent Hill The Room",
            "Walter's separation from his mother  -  Silent Hill The Room",
            "Children sacrificed for the cult  -  Silent Hill",
            "Alessa's fear of big dogs  -  Silent Hill",
            "Walter Sullivan's views of society  -  Silent Hill The Room",
            "The true god of the Cult  -  Silent Hill",
            "Spread of corruption -  Silent Hill 3",
            "Restricted to find love  -  Silent Hill Homecoming",
            "Children burned by the cult  -  Silent Hill",
            "Pregnant women killed by the cult -  Silent Hill Homecoming",
            "Decomposition of a corpse  -  Silent Hill",
            "Walter Sullivan's fear to hospitals  -  Silent Hill The Room",
            "Torture of prisoners  -  Silent Hill Downpour",
            "Manifestation of James's guilt  -  Silent Hill 2",
            "Alessa Gillespie's fear of adults  -  Silent Hill",
            "The memory of Scarlet Fitch  -  Silent Hill Homecoming",
            "The mental disorder schizophrenia  -  Silent Hill Homecoming",
            "A murder victim  -  Silent Hill Downpour",
            "Suffocation when buried alive  -  Silent Hill Homecoming",
            "Confusion about relationships  -  Silent Hill Homecoming",
            "Fear of rapists and stalkers  -  Silent Hill 3",
            "Walter Sullivan's fear of dogs  -  Silent Hill The Room",
            "Fear of sex  -  Silent Hill 3",
            "Blame someone else  -  Silent Hill Downpour",
            "Manifestation of the memory of Frank  -  Silent Hill Downpour",
            "Twins murdered by Walter Sullivan  -  Silent Hill The Room",
            "Wish to hide from the authorities -  Silent Hill Homecoming",
            "Guilty feeling  -  Silent Hill Downpour",
        ],

    ];


    function handleLeftClick() {
        setId(id === 0 ? data[0].length - 1 : id - 1);
    }

    function handleRightClick() {
        setId(id === data[0].length - 1 ? 0 : id + 1);
    }

    return (
        <section className="format-section-MSH">
            <section className="SH-Monster-slider">
                <img src="ImagesVideos/images/Silent-Hill/Halo-of-sun.png"alt="" className="Monster-logo" />
                <div className="card-Monster-sh">
                    <div className="panel-1"></div>
                    <div className="panel-22"></div>
                    <div className="Monster-SH">
                        <div className="SH-Monster-image">
                            
                            <img src={`ImagesVideos/images/SH-Monster/${data[0][id]}.png`} alt=""/>
                        </div>
                        <div className="Monster-details">
                            <div>
                                <h1 className="Monster-name">
                                    {data[1][id]}
                                </h1>
                                <p className="Monster-description">{data[2][id]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arrow-left" onClick={handleLeftClick}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="arrow-right" onClick={handleRightClick}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default SliderSH;