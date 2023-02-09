import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const SliderAC = () => {
    const [id, setId] = useState(0);
    const data = [
        [
            "https://lparchive.org/Assassins-Creed/Update%2025/1-25.jpg",
            "https://i.imgur.com/Nnw59gN.png",
            "https://cdn3.whatculture.com/images/2017/01/161fb1f4c2cf9d82-600x338.jpg",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675108145/Assassins%20Creed/Torres00_i33yys.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675109487/Assassins%20Creed/Fran%C3%A7ois-Thomas_Germain_j3yaf8.webp",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a99d6e81-03cd-41f9-8532-f42459eaad6e/d9jffoo-0eae2a6d-2053-43fa-9382-8b8a00b2ae1c.png/v1/fill/w_1024,h_576,q_80,strp/crawford_starrick_tea___assassin_s_creed_syndicate_by_plank_69_d9jffoo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYTk5ZDZlODEtMDNjZC00MWY5LTg1MzItZjQyNDU5ZWFhZDZlXC9kOWpmZm9vLTBlYWUyYTZkLTIwNTMtNDNmYS05MzgyLThiOGEwMGIyYWUxYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3jQsw1iPkNmkExBI4lDgzEoa1AR1koGqH-58aaK13N8",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675111769/Assassins%20Creed/maxresdefault_nhc5mj.jpg",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675112258/Assassins%20Creed/Morges_cm2pfl.webp",
            "https://res.cloudinary.com/dqhtvtptp/image/upload/v1675112348/Assassins%20Creed/Assassins-Creed-Valhalla-King-Alfred_ihmmth.webp",
        ],
        [
            "Robert de Sablé",
            "Rodrigo Borgia",
            "Haytham Kenway",
            "Laureano de Torres y Ayala",
            "François-Thomas Germain",
            "Crawford Starrick",
            "Flavius Metellus",
            "Amorges The Tusk of Persia",
            "King Alfred the Great",

        ],

        [
            "1190 - 11th Grand Master of the Knights Templar",
            "1476 - Grand Master of Italian the Templar Order and Pope of Rome",
            "1754 - Grand Master of the American Templar Order",
            "1693 - Grand Master of the West Indies Rite of the Templar Order and Governor of Florida",
            "1788 - Grand Master of the Parisian Rite of the Templar Order",
            "1868 - Grand Master of the British Rite of the Templar Order in London",
            "45 BC - Grand Master of the Order of the Ancients Egypt",
            "413 BC - Grand Master of the Persian Order of the Ancients",
            "871 BC - King of Wessex Grand Master of the Order of the Ancients",
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