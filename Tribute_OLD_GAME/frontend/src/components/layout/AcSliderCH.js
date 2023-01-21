import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const SliderAC = () => {
    const [id, setId] = useState(0);
    const data = [
        [
            "https://p4.wallpaperbetter.com/wallpaper/528/1/150/altair-ibn-laahad-assassins-assassins-creed-video-games-wallpaper-preview.jpg",
            "https://www.playstationinfo.de/wp-content/uploads/2016/09/Assassins_Creed_Ezio_Auditore_da_Firenze_wallpaper-768x432.jpg",
            "https://www.nintenderos.com/wp-content/uploads/2019/03/Assassins-Creed-III-Remastered..jpg",
            "https://images.hdqwalls.com/wallpapers/edward-kenway-in-assassins-creed-4.jpg",
            "https://c4.wallpaperflare.com/wallpaper/17/655/811/arno-dorian-assassin-assassins-creed-unity-paris-wallpaper-preview.jpg",
            "https://i.ytimg.com/vi/P5c9YHz7Kg0/maxresdefault.jpg",
            "https://steamuserimages-a.akamaihd.net/ugc/936054109931115374/526E7FAA9B87F604DE76A404BC364EF483ABCB46/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            "https://i1.wp.com/www.gaymer.es/es/wp-content/uploads/2019/02/kassandra-3840x2160-assassins-creed-odyssey-4k-15456.jpg?fit=3840%2C2160&ssl=1",
            "https://www.gamers.de/wp-content/uploads/2020/07/3af26938-6c03-4276-9f42-208f53d6f136-eivor-assassins-creed-valhalla-poster-uhdpapercom-4k-71968-scaled.jpg",
        ],
        [
            "Altaïr Ibn La'Ahad",
            "Ezio Auditore",
            "Connor",
            "Edward Kenway",
            "Arno Dorian",
            "Jacob and Evie Frye",
            "Bayek of Ziwa",
            "Kassandra",
            "Eivor",

        ],

        [
            "1191 - Syrian master",
            "1503 - Italian master",
            "1784 - American master",
            "1723 - British master",
            "1789 - French master",
            "1873 - British masters",
            "47 BC - Egypt founder of Assassins",
            "584 BC - Greek master",
            "872 BC - Viking master",
        ],

    ];


    function handleLeftClick() {
        setId(id === 0 ? data[0].length - 1 : id - 1);
    }

    function handleRightClick() {
        setId(id === data[0].length - 1 ? 0 : id + 1);
    }


    return (
        <div className="Slider-masters">
            <div className="slider-ctr">

                <figure className="slide text-on"><img
                    src={`${data[0][id]}`}
                    alt="Ocean" />
                    <figcaption>
                        <div className="title">{data[1][id]}</div>
                        <div className="author">{data[2][id]}</div>
                    </figcaption>
                </figure>
                <div className="slider-control">
                    <div className="control prev" onClick={handleLeftClick}>
                        <div className="icon"><IoIosArrowBack /></div>
                    </div>
                    <div className="control next" onClick={handleRightClick}>
                        <div className="icon"><IoIosArrowForward /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderAC;