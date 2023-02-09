import React, { useState } from 'react';

function SliderSH() {
    const [id, setId] = useState(0);
    const data = [
        [
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073091/Silent-Hill-Characters/SH-Monster/Amnion_b3v7he.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073230/Silent-Hill-Characters/SH-Monster/Asphyxia_khmnpf.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073259/Silent-Hill-Characters/SH-Monster/Bubble-Head-Nurse_nmhmih.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073281/Silent-Hill-Characters/SH-Monster/Doll_fzjpen.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073091/Silent-Hill-Characters/SH-Monster/Feral_lzk9jj.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073091/Silent-Hill-Characters/SH-Monster/Ghost_qfrkpd.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Greedy-Worm_qmqajw.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Grey-Child_ihqlam.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/groaner_rtlw0z.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Gum-Heads_aklzln.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Incubus_hmpeom.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/insane-Cancer_zxxwwy.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Lurker_y1bwaw.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073444/Silent-Hill-Characters/SH-Monster/Mumbler_rjlod0.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Needler_yyefmy.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073092/Silent-Hill-Characters/SH-Monster/Night-flutter_un1n28.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Patient_wzhqps.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Prisoner-Minion_qnglss.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/Pyramid-Head_l7pihv.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Romper_kcsjed.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073543/Silent-Hill-Characters/SH-Monster/Scarlet_crcyls.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Schism_ryadd4.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Screamer_bopgk6.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073093/Silent-Hill-Characters/SH-Monster/Sepulcher_ikrpz2.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073606/Silent-Hill-Characters/SH-Monster/Siam_gkake3.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073656/Silent-Hill-Characters/SH-Monster/Slurper_yhxlbv.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/Sniffer-Dog_i9mrce.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/Split-Worm_wtl6nl.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/The-Bogeyman_nnhde9.png",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073717/Silent-Hill-Characters/SH-Monster/The-Wheelman_x4lm9t.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/Twin-Victims_udnv4g.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675073094/Silent-Hill-Characters/SH-Monster/Weeping-Bat_r5lt5l.webp",
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
                <img src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675078741/Silent-Hill-Characters/SH-Cult/Halo-of-sun_j2ufno.png" alt="" className="Monster-logo" />
                <div className="card-Monster-sh">
                    <div className="panel-1"></div>
                    <div className="panel-22"></div>
                    <div className="Monster-SH">
                        <div className="SH-Monster-image">

                            <img src={data[0][id]} alt="" />
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