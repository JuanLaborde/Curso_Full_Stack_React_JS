import React, { useEffect } from 'react';

function ShHistory() {
    useEffect(() => {
        const slideNavs = document.querySelectorAll('.slide-nav-HIS');

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
        const current = document.querySelector('.flex--active-HIS').dataset.slide;
        const next = e.currentTarget.dataset.slide;

        if (current === next) {
            return false;
        } else {
            const slideNavs = document.querySelectorAll('.slide-nav-HIS');
            slideNavs.forEach(slideNav => slideNav.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const nextSlide = document.querySelector(
                `.slider__warpper_HIS .flex__container_HIS[data-slide='${next}']`
            );
            nextSlide.classList.add('flex--preStart-HIS');

            const currentSlide = document.querySelector('.flex--active-HIS');
            currentSlide.classList.add('animate--end-HIS');

            setTimeout(() => {
                nextSlide.classList.remove('animate--start--HIS', 'flex--preStart-HIS');
                nextSlide.classList.add('flex--active-HIS');

                currentSlide.classList.add('animate--start--HIS');
                currentSlide.classList.remove(
                    'animate--end-HIS',
                    'flex--active-HIS'
                );
            }, 800);
        }
    };

    return (
        <div className="Content-Slider-HIS">
            <div className="slider__warpper_HIS">
                <div className="flex__container_HIS flex--active-HIS" data-slide="1H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Silent Hill</p>
                            <p className="text--normal--HIS">On the surface, Silent Hill is portrayed as what could
                                be
                                considered an archetypal, peaceful, New England tourist town for relaxation.
                                Chiefess among its industries are tourism and, to a lesser extent, agriculture.
                                
                                However, Silent Hill is shown to be anything but ordinary. A religious extremist
                                doomsday cult known as the Order lurks about the town, orchestrating their
                                malefic
                                endeavors in the shadows. Adamant for the return of their God in order to reach
                                Paradise, the Order has been involved with murder, torture, child abuse, and has
                                even convinced parents to dismember, drown, and set their children on fire,
                                believing their sacrifices to appease God.
                                
                                Worse yet, Silent Hill plays host to a horrific paranormal and supernatural
                                alternate reality known as the Fog World and Otherworld, home to all manner of
                                nightmarish monsters. It is also common to hear air-raid sirens between Fog
                                World
                                and Otherworld shifts.</p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077143/Silent-Hill-Characters/SH-History-Section/SH-Town-day_qmqizk.jpg" alt="" />
                    </div>
                </div>
                <div className="flex__container_HIS animate--start--HIS" data-slide="2H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Fog World</p>
                            <p className="text--normal--HIS">With an unnatural fog rolling into town off of Toluca
                                Lake,
                                the streets of Silent Hill appear abandoned. Cars may lie wrecked along the side
                                of
                                the road, while buildings stand vacant and dilapidated. The most abundant form
                                of
                                life around are monsters, who roam about unhindered. Many doors found throughout
                                Silent Hill are broken, preventing access to a great many of the buildings
                                there.
                                This may be a result of the town, leading those who come here to their fate,
                                whatever it may be. In some instances, ash seems to fall from the sky. It has
                                been
                                demonstrated that the Fog World is, more or less, uniform between character
                                perceptions.
                                
                                Another peculiarity lies within how many streets come to abrupt, unnatural
                                endings.
                                Sometimes the roads fall away, replaced by bottomless chasms. Other times most
                                of
                                the streets are instead boarded up in an almost man-made way, with high walls
                                covered in tarp, and in many cases, actual road blocks and wooden boards.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077160/Silent-Hill-Characters/SH-History-Section/Silent-hill-gas_rd7fj0.jpg" alt="" />
                    </div>
                </div>
                <div className="flex__container_HIS animate--start--HIS" data-slide="3H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Alchemilla Hospital</p>
                            <p className="text--normal--HIS">Also known as Alchemilla Hospital: Asylum for the
                                Mentally
                                Ill, is a medical
                                center in Silent Hill in Central Silent Hill located on Koontz Street.
                                
                                Alessa Gillespie was taken here after her mother, Dahlia Gillespie, attempted to
                                use
                                her in a ritual by setting fire to their home with Alessa still inside. Alessa
                                was
                                kept in a room deep inside of the hospital's basement for seven years; all of
                                the
                                nurses, excluding Lisa Garland, were under strict orders to never enter the
                                basement.
                                
                                In the Fog World, the hospital looks almost normal, only that it is abandoned,
                                without electricity and with dirty and deteriorated walls and floors. The rooms
                                are
                                full of rusty equipment and deteriorated by the passage of time.
                                
                                In the other world, everything changes, floors and walls are replaced by bars
                                and
                                metal plates rusted and covered in blood, all the rooms are full of torture
                                machines
                                and skeletons everywhere. Every room is filled with monstrous nurses who don't
                                move
                                until they detect movement.</p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077173/Silent-Hill-Characters/SH-History-Section/Alchemilla-Hospital_niaroe.webp" alt="" />
                    </div>
                </div>
                <div className="flex__container_HIS animate--start--HIS" data-slide="4H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Lakeside Amusement Park</p>
                            <p className="text--normal--HIS">Located on West Sandford Street in the Resort Area of
                                Paleville, it's a popular tourist attraction with key activities including a
                                rollercoaster, a carousel, a ferris wheel, and a few other carnival rides and
                                sideshows.
                                
                                Robbie the Rabbit is one of Lakeside Amusement Park's four mascots. The others
                                are
                                Kathy the Kitty, Huey the Horse, and Dawn the Duck.
                                
                                In the Fog world, the park is abandoned covered in ash and all of its
                                attractions
                                look dilapidated and rusty.
                                
                                In the other world, the park is a place of horror, the floors are replaced by
                                rusty
                                metal fences, all the attractions are decomposing and covered in blood, and
                                Robbie
                                the rabbit can be found everywhere, all bloodied. The main paths of the park are
                                surrounded by large black holes that seem to have no end.

                                Many attractions activate themselves, mysteriously causing the destruction of
                                the
                                park, but after a few moments they are rebuilt.</p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077192/Silent-Hill-Characters/SH-History-Section/Lakeside-Amusement-Park_xhzbqh.jpg" alt="" />
                    </div>
                </div>
                <div className="flex__container_HIS animate--start--HIS" data-slide="5H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Midwich Elementary School</p>
                            <p className="text--normal--HIS">Midwich Elementary School is a school located on the
                                southwest side of Old Silent Hill on Midwich Street.
                                Alessa Gillespie was a student here for approximately a year or two during her
                                childhood. Alessa was the subject of extensive abuse and rejection from her
                                peers,
                                due to her possessing witch-like powers.
                                This school was used by the cult to brainwash the children of the inhabitants of
                                Silent Hill. Later many of
                                his students were sacrificed in brutal rituals orchestrated by the cult, in
                                order to
                                offer them to their god.
                                
                                In the Fog world, the school looks like any other building in Silent Hill. But
                                its
                                corridors are filled with ghostly figures, believed to belong to children
                                sacrificed
                                by the cult.
                                
                                In the other world, all the walls and floors are replaced with rusty,
                                blood-covered
                                metal plates. The children's ghosts become ferocious monsters and in many rooms
                                there are symbols and rituals of the cult, written in blood on the metal walls.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077217/Silent-Hill-Characters/SH-History-Section/Midwich-Elementary-School_rbzofp.webp" alt="" />
                    </div>
                </div>
                <div className="flex__container_HIS animate--start--HIS" data-slide="6H">
                    <div className="flex__item_HIS flex__item_HIS--left">
                        <div className="flex__content_HIS">
                            <p className="text--sub--HIS">Other World</p>
                            <p className="text--normal--HIS">Appearing different to each individual, the Otherworld
                                can
                                be seen as a symbolic manifestation of a person's psyche. For example, as
                                generated
                                by the mind of the badly injured Alessa Gillespie, Silent Hill has become
                                incredibly
                                dark and industrialized, with structures being composed of fencing, metal
                                plates,
                                fans, and piping. Smokestacks, windmills, and corpses also lend to the
                                appearance of
                                this world. Blood covers most things, if not everything, in this twisted world.
                                This
                                is considered the iconic appearance of the Otherworld.
                                
                                Silent Hill isn't the only area afflicted with this strange presence. On at
                                least
                                three separate occasions, locations outside of Silent Hill have become victims
                                of
                                this darkness. Shepherd’s Glen falls to this dark influence due to the breaking
                                of a
                                pact held between its founders and the old god, while Ashfield and Heather
                                Masons's
                                town both have areas overlapping with the strange phenomena identical to those
                                of
                                Silent Hill.</p>
                        </div>
                    </div>
                    <div className="flex__item_HIS flex__item_HIS--right faded faded-left">
                        <img className="SH__img_HIS" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675077253/Silent-Hill-Characters/SH-History-Section/OtherWorld_fciiwe.jpg" alt="" />
                    </div>
                </div>

            </div>
            <div className="slider__navi_HIS">
                <figure href="#" className="slide-nav-HIS btn-image1 active" data-slide="1H"></figure>
                <figure href="#" className="slide-nav-HIS btn-image2" data-slide="2H"></figure>
                <figure href="#" className="slide-nav-HIS btn-image3" data-slide="3H"></figure>
                <figure href="#" className="slide-nav-HIS btn-image4" data-slide="4H"></figure>
                <figure href="#" className="slide-nav-HIS btn-image5" data-slide="5H"></figure>
                <figure href="#" className="slide-nav-HIS btn-image6" data-slide="6H"></figure>
            </div>
        </div>
    );
}

export default ShHistory;