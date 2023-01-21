import React, { useEffect } from 'react';

function ACHistory() {
    useEffect(() => {
        const slideNavs = document.querySelectorAll('.slide-nav-AC');

        slideNavs.forEach(slideNav => {
            slideNav.addEventListener('click', handleClick);
        });

        return () => {
            slideNavs.forEach(slideNav => {
                slideNav.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const handleClick = e => {
        e.preventDefault();
        const current = document.querySelector('.flex--active-AC').dataset.slide;
        const next = e.currentTarget.dataset.slide;

        if (current === next) {
            return false;
        } else {
            const slideNavs = document.querySelectorAll('.slide-nav-AC');
            slideNavs.forEach(slideNav => slideNav.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const nextSlide = document.querySelector(
                `.slider__warpper_AC .flex__container_AC[data-slide='${next}']`
            );
            nextSlide.classList.add('flex--preStart-AC');

            const currentSlide = document.querySelector('.flex--active-AC');
            currentSlide.classList.add('animate--end-AC');

            setTimeout(() => {
                nextSlide.classList.remove('animate--start--AC', 'flex--preStart-AC');
                nextSlide.classList.add('flex--active-AC');

                currentSlide.classList.add('animate--start--AC');
                currentSlide.classList.remove(
                    'animate--end-AC',
                    'flex--active-AC'
                );
            }, 800);
        }
    };

    return (
        <div className="Content-Slider-AC">
            <div className="slider__warpper_AC">
                <div className="flex__container_AC flex--active-AC" data-slide="1H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed</p>
                            <p className="text--normal--AC">Desmond Miles, a bartender, is kidnapped by the company
                                Abstergo Industries for use as a test subject in the "Animus," a device that can
                                simulate genetic memory. Abstergo intends to put Desmond in the device to recall
                                the memories of his ancestor, Altaïr Ibn-La'Ahad, a member of the Assassin
                                Brotherhood in the year 1191, who lived during the Third Crusade in the Holy
                                Land. Initially, Desmond has trouble adjusting to the device, but eventually
                                relives Altaïr's exploits over the next several days.
                                <br />
                                When the process is
                                complete, Desmond learns that Abstergo is a modern-day front of the Templars,
                                and they are already seeking other artifacts at locations identified in Altaïr's
                                memories. Further, he learns that the modern-day Assassins had tried to rescue
                                him before the memory had completed but had failed.</p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC" src="https://images2.alphacoders.com/276/2762.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="2H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed II</p>
                            <p className="text--normal--AC">Due to the "Bleeding Effect", Desmond has gained "Eagle
                                Vision", enabling him to see a variety of messages and symbols written in blood
                                on his bedroom wall by its former occupant, known only as "Subject 16". While
                                staring at the message, former employee and researcher of Abstergo, Lucy
                                Stillman, arrives, covered in blood, and frees Desmond from the room. He then
                                re-enters the Animus briefly and watches the birth of Ezio Auditore da Firenze.
                                Ezio, living in Italy during the Renaissance, is approximately 17 when he
                                discovers that his family was betrayed by a close friend of his father's in the
                                midst of a political coup d'état. Ezio's father's final instructions lead him to
                                a hidden room in the family home with a chest containing the clothing and
                                weapons of an Assassin.
                                In this way he began his war against the Templars led by Pope Rodrigo Borgia,
                                who is looking for the apple of Eden in order to open the hidden temple under
                                the Vatican.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC" src="https://images6.alphacoders.com/738/738982.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="3H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed III</p>
                            <p className="text--normal--AC">Desmond finding the Grand Temple in a cave in Turin,
                                New York. Using Ezio's
                                Apple of Eden to access the structure, Desmond activates a large portion of the
                                equipment, as well as a timer indicating when the Second Disaster is predicted
                                to occur, on December 21, 2012. His mind then falls into a fugue state, in which
                                he relives some significant memories of his ancestor, Haytham Kenway. During a
                                production at the London Theatre Royal, Haytham murders a man named Miko and
                                steals a medallion which he and his associates believe allows access to a
                                storehouse for "those who came before". After Haytham returns with the
                                medallion, he is dispatched to the British American colonies to find the
                                storehouse.
                                This is when it is discovered that Haytham is actually a Templar and has a son
                                with a Native American named Connor who becomes an Assassin and ends his
                                father's plans, in this way Desmond discovers the last key to open the temple
                                and save humanity at the cost of his life by freeing Juno one of the ancient.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://c4.wallpaperflare.com/wallpaper/919/447/646/assassins-creed-iii-wallpaper-preview.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="4H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Black Flag</p>
                            <p className="text--normal--AC">Using the DNA collected from Desmond Miles’s corpse,
                                Abstergo Entertainment developed an initiative called the Sample 17 Project to
                                explore the genetic memories of Desmond’s ancestors to gather material for the
                                production of various Animus Omega products and feature films. The project was
                                started with the ulterior motive of locating various Precursor sites and Pieces
                                of Eden. In 2013, the company hired a research analyst for scouting the memories
                                of one of Desmond’s ancestors, Edward Kenway, a British privateer-turned pirate
                                who later went on to become an Assassin. Afterwards, Edward was inducted in the
                                Templar Order.
                                Edward dedicated himself to fighting the Templars, and finding the Observatory,
                                an ancient temple of the first civilization. In the course of this fight he
                                meets a person known as the sage, who is later discovered to be the
                                reincarnation of Aita one of the ancients and who wants to use the temple to
                                control humanity and free his beloved Juno.</p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/xz1F4FUSc3YgsQnnl2iXe/01157c89feeba89f433092c7bc7c0f76/ac4_ss4_full.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="5H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Unity</p>
                            <p className="text--normal--AC">In 2014, a Helix user explored the memories of a
                                Templar in the service of Jacques de Molay. The memory takes place in 13 October
                                1307, in the Temple in Paris, which was being attacked by the forces of King
                                Philip the Fair. Alerted by the ensuing battle, Jacques tasked his advisor to
                                hide the Sword of Eden and the Codex Pater Intellectus. Running through the
                                battlefield, the advisor took notice of an Assassin, Thomas de Carneillon. After
                                a sword fight with Thomas, the advisor returned the Sword and Codex to their
                                resting place in the Temple. We pass to 1789, to Arno Dorian a French Assassin,
                                who
                                lives in a troubled time that would later be known as the French Revolution. He
                                must face the Templars and an enigmatic Saint Germain, who is later discovered
                                to be another reincarnation of Aita, who wants to obtain the Sword of Eden in
                                order to gain power and control the order of the Templars and end the Assassins
                                of Paris. Saint Germain is killed by Arno and his body hidden in the catacombs
                                of Paris.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_assassins_creed_unity_03_1920x1080.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="6H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Syndicate</p>
                            <p className="text--normal--AC">In 2015, Bishop contacts the Helix Initiate to help
                                herself and fellow Assassins Shaun Hastings and Rebecca Crane locate a Piece of
                                Eden in London. Through camera drones, the Initiate watches the pair of
                                Assassins conduct their field work and download the memories of the twins Jacob
                                and Evie Frye. By 1868, London had fallen under the control of the Templar Grand
                                Master Crawford Starrick, who controlled the city's vast industrial base and
                                politicians through a network of lieutenants, keeping the Templars in power and
                                oppressing the working classes. In 1868, controlling London meant controlling
                                the British Empire. Henry Green, leader of the remaining Assassins in the city,
                                wrote to his friend George Westhouse to petition the Assassin Council of Crawley
                                for aid. In Croydon, the Frye twins coordinated with Westhouse to remove the
                                Templar threat. This is when they discover that the Templars are after a
                                powerful artifact from Eden, which has the ability to make him immune to all
                                harm while wearing it. They later manage to finish off the Templars and destroy
                                the artifact.</p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://c4.wallpaperflare.com/wallpaper/61/218/368/london-killer-character-syndicate-wallpaper-preview.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="7H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Origins</p>
                            <p className="text--normal--AC">In 49 BC, Bayek, a Medjay charged with protecting the
                                Siwa Oasis, is abducted along with his son Khemu by a group of masked men and
                                taken to an underground vault in the Temple of Amun. They give Bayek a dormant
                                Piece of Eden and demand that he use it to open a secret vault. Khemu helps
                                Bayek escape. While struggling with one of the masked men, Bayek inadvertently
                                kills Khemu. One year later, in 48 BC, Bayek has exiled himself to track down
                                the five masked men to take his revenge. After eliminating two targets, Bayek
                                heads for Alexandria to meet his wife Aya. Aya reveals that there is only one
                                target left. Bayek identifies the Royal Scribe Eudoros as the last target, but
                                he is disturbed by Eudoros' last words, which imply there are more masked men.
                                Aya directs Bayek to her friend Apollodorus for more information. Apollodorus
                                introduces him to Cleopatra, who confirms that the masked men are members of the
                                Order of the Ancients, which ousted her from the throne and seeks to control
                                Egypt using Ptolemy as their puppet.</p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC" src="https://wallpaperaccess.com/full/254428.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="8H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Odyssey</p>
                            <p className="text--normal--AC">In 480 BC, where King Leonidas leads the Spartan army
                                against a Persian charge during the Battle of Thermopylae. The skirmish is won,
                                but Leonidas is informed by a captured enemy that the Persian army has learned
                                of the mountain path and will surround the Spartans by morning. Nevertheless,
                                Leonidas resolves to hold off the Persian advance. In 2018, Layla Hassan
                                recovers Leonidas' spear and extracts from it the DNA of his grandchildren,
                                Alexios and Kassandra, to be used for her Animus to find the location of the
                                Staff of Hermes Trismegistus, the most powerfull artifact of Eden what can
                                provide an inmortal life to who possess the Staff.
                                In 431 BC, at the onset of the Peloponnesian War, the Eagle Bearer is hired by a
                                mysterious merchant named Elpenor to assassinate the "Wolf of Sparta". In this
                                way he discovers the order of the ancients, who seek Atlantis to seize its power
                                and the staff and thus control all of ancient Greece.</p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://www.gratistodo.com/wp-content/uploads/2018/06/Assassins-Creed-Odyssey-Wallpapers-1-700x394.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex__container_AC animate--start--AC" data-slide="9H">
                    <div className="flex__item_AC flex__item_AC--left">
                        <div className="flex__content_AC">
                            <p className="text--sub--AC">Assassin's Creed Valhalla</p>
                            <p className="text--normal--AC">In 2020, the unexplained strengthening of Earth's
                                magnetic field negatively affects the planet. Layla Hassan, Shaun Hastings, and
                                Rebecca Crane receive a signal with coordinates in New England, where they
                                exhume a Viking raider's remains. Layla, struggling with the Staff of Hermes,
                                enters the Animus to view the raider's memories.
                                In 855 CE in Norway, a young Eivor Varinsdottir witnesses warlord Kjotve the
                                Cruel sacking her hometown and killing her parents before she is rescued by
                                Sigurd, son of King Styrbjorn of the Raven Clan. Seventeen years later, Eivor
                                has been adopted by Styrbjorn, and pursues vengeance against Kjotve. In this
                                revenge, Eivor discovers that there is a mysterious group behind everything, the
                                order of the ancients, who want to control all of England through the artifacts
                                of Eden, Eivor receives the help of the Assassins who manage to put an end to
                                the order of the ancients, who would several years later resurface as the order
                                of
                                the Templars.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_AC flex__item_AC--right faded faded-left">
                        <img className="SH__img_AC"
                            src="https://www.pcgames.de/screenshots/original/2020/10/Assassins_Creed_Valhalla_Artwork_02-buffed3.jpg" alt=""/>
                    </div>
                </div>

            </div>
            <div className="slider__navi_AC">
                <figure href="#" className="slide-nav-AC btn-image1AC active" data-slide="1H"></figure>
                <figure href="#" className="slide-nav-AC btn-image2AC" data-slide="2H"></figure>
                <figure href="#" className="slide-nav-AC btn-image3AC" data-slide="3H"></figure>
                <figure href="#" className="slide-nav-AC btn-image4AC" data-slide="4H"></figure>
                <figure href="#" className="slide-nav-AC btn-image5AC" data-slide="5H"></figure>
                <figure href="#" className="slide-nav-AC btn-image6AC" data-slide="6H"></figure>
                <figure href="#" className="slide-nav-AC btn-image7AC" data-slide="7H"></figure>
                <figure href="#" className="slide-nav-AC btn-image8AC" data-slide="8H"></figure>
                <figure href="#" className="slide-nav-AC btn-image9AC" data-slide="9H"></figure>
            </div>
        </div>
    );
}

export default ACHistory;