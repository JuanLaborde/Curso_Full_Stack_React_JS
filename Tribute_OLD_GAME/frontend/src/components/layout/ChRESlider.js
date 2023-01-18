import React, { useState } from 'react';
function SliderCH() {
    const [slideNumber, setSlideNumber] = useState(0);
    const slides = [...document.querySelectorAll(".slide-ch")];
    const numberOfSlides = slides.length;
    const handleNextClick = () => {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        setSlideNumber(prevSlideNumber => {
            if (prevSlideNumber === numberOfSlides - 1) {
                return 0;
            }
            return prevSlideNumber + 1;
        });

        slides[slideNumber].classList.add("active");
    };
    return (
        <section className="format-section-ch">
            <div className="slider-ch">
                <div className="slide-ch active">
                    <img src="Images-video/Resident-Evil/CH-images/Chris.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>C</span>hris <span>R</span>edfield</h2>
                        <p>Captain of an American operator in the Bioterrorism Security Assessment Alliance and
                            ex-member of the
                            Special Tactics and Rescue Service assigned to S.T.A.R.S. Alfa team.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Jill.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>J</span>ill <span>V</span>alentine</h2>
                        <p>Is an American Special Operations Agent of the Bioterrorism Security Assessment
                            Alliance and
                            ex-member of the
                            Special Tactics and Rescue Service assigned to S.T.A.R.S. Alfa team.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Barry.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>B</span>arry <span>B</span>urton</h2>
                        <p>Is a consultant and combat specialist for the Bioterrorism Security Assessment
                            Alliance and ex-member
                            of the
                            Special Tactics and Rescue Service assigned to S.T.A.R.S. Alfa team.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/rebr0.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>R</span>ebeca <span>C</span>hambers</h2>
                        <p>Member of the Special Tactics and Rescue Service assigned to S.T.A.R.S. Bravo team
                            and specialist
                            biochemist.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/billr0.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>B</span>illy <span>C</span>oen</h2>
                        <p>Was a U.S. Marine Corps Second Lieutenant-turned death-row inmate that escaped into
                            the Arklay
                            Mountains.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Leon.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>L</span>eon <span>K</span>ennedy</h2>
                        <p>Is an American federal agent by the Division of Security Operations, a
                            counter-terrorism agency with
                            direct Presidential oversight and
                            ex-police officer of Raccon Police Departament.
                        </p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Claire.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>C</span>laire <span>R</span>edfield</h2>
                        <p>Is a current member of the human rights organization, TerraSave. Survivor of the
                            Raccon City Incident
                            and sister of Chris Redfield.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Ada.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>A</span>da <span>W</span>ong</h2>
                        <p>Is the pseudonym of an enigmatic unnamed spy of Asian-American descen. She acted
                            secretly in the
                            background of many biohazard incidents and collected information.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Sherry.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>S</span>herry <span>B</span>irkin</h2>
                        <p>Is an American federal agent attached to the Division of Security Operations. As
                            child she was
                            infected with the G-virus in the Raccon City Incident.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Annette.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>A</span>nnette <span>B</span>irkin</h2>
                        <p>Was a virologist employed by Umbrella U.S.A., and one of the administrators at their
                            NEST facility in
                            the outskirts of Raccoon City. Mother of Sherry Birkin.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Carlos.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>C</span>arlos <span>O</span>livera</h2>
                        <p>Was a mercenary for the Umbrella Biohazard Countermeasure Service. is also one of the
                            few survivors
                            of the deployed squads who served during Raccoon City Destruction Incident.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Brad.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>B</span>rad <span>V</span>ickers</h2>
                        <p>Was a member of the Raccoon Police Department's S.T.A.R.S. Alpha Team. He was cruelly
                            killed by the
                            BOW Nemesis.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Ashley.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>A</span>shley <span>G</span>raham</h2>
                        <p>Is the daughter of former US President Graham. She was briefly held captive by the
                            Spanish cult Los
                            Iluminados as a means of gaining control over the Presidency.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Luis.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>L</span>uis <span>S</span>era</h2>
                        <p>Was a biologist. He was recruited into Los Iluminados' research department to
                            genetically-engineer
                            Plagas and bio-weapons, and was ultimately killed in his attempt to undermine their
                            efforts.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Sheva.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>S</span>heva <span>A</span>lomar</h2>
                        <p>Is an agent for the Bioterrorism Security Assessment Alliance, operating as part of
                            its West African
                            branch. She was assigned to the current mission to assist Chris Redfield.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Jake.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>J</span>ake <span>M</span>uller</h2>
                        <p>Was a mercenary raised in Eastern Europe. The son of bioweapons developer Dr. Albert
                            Wesker, he was
                            dragged into a conspiracy to launch major terrorist attacks with the C-Virus.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Ethan.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>E</span>than <span>W</span>inters</h2>
                        <p>Was an American mutant trained as systems engineer. One of many mutant victims of
                            biological
                            weaponry, Winters was infected with a weaponized species of "Mold".</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Mia.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>M</span>ia <span>W</span>inters</h2>
                        <p>Former operative for The Connections who worked covertly in the birth of Eveline, her
                            while covering
                            up her career as a worker at a "trading company" to her husband, Ethan.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Weskerre0.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>A</span>lbert <span>W</span>esker</h2>
                        <p>Was an accomplished virologist notorious for his work with groups affiliated with the
                            bio-weapons
                            black market. Creator of the Uroboros Virus.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Marcus.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>J</span>ames <span>M</span>arcus</h2>
                        <p>One of the founders of Umbrella Pharmaceuticals and was among those responsible for
                            the creation of
                            the T-Virus.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Birkin.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>W</span>illiam <span>B</span>irkin</h2>
                        <p>Was a virologist who worked for Umbrella. One of the leading scientists behind the
                            T-Virus and
                            discoverer of the G-Virus.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Oswell.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>O</span>well <span>S</span>pencer</h2>
                        <p>Was an aristocratic British billionaire, virologist and eugenicist. One of the
                            founders of Umbrella
                            Pharmaceuticals.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Brian.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>B</span>rian <span>I</span>rons</h2>
                        <p>Was ther chief of Police of the Raccoon Police Department. Involved in corporate
                            corruption and
                            accepted bribes from Umbrella to keep the company out
                            of investigations.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Nikolai.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>N</span>ikolai <span>Z</span>inoviev</h2>
                        <p>Codenamed "Silver Wolf", is a Soviet Army veteran who served in Umbrella's
                            paramilitary as a Sergeant
                            in the UBCS as well as a Monitor.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Ramon.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>R</span>amon <span>S</span>alazar</h2>
                        <p>Was a nobleman from an unnamed rural region in Spain who converted to Los Iluminados,
                            a cult led by
                            Osmund Saddler, who had access to bioweapons research and was interested in Las
                            Plagas.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Jackk.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>J</span>ack <span>K</span>rauser</h2>
                        <p>Was an agent for the 3rd Organization during the War on Terror, and a supporter of
                            Dr. Albert Wesker.
                            Took part in the infiltration of Los Iluminados to obtain a Plaga parasite.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Osmund.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>O</span>smund <span>S</span>addler</h2>
                        <p>Was the leader of Los Iluminados, a neopagan cult and paramilitary organisation. He
                            was a bio-weapons
                            research chief who resided in an isolated Spanish region.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Ricardo.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>R</span>icardo <span>I</span>rving</h2>
                        <p>Was an American black market dealer of bio-weapons. He was a senior partner in
                            Tricell's illegal
                            bioweapons research, led by
                            TRICELL Africa's CEO, Excella Gionne and Dr. Albert Wesker.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Excella.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>E</span>xcella <span>G</span>ionne</h2>
                        <p>Was a British-Italian businesswoman. She is known for her leadership of Tricell,
                            Inc., Africa and her
                            involvement in Tricell's bio-weapons program.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Dereck.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>D</span>ereck <span>S</span>immons</h2>
                        <p>Was the National Security Advisor to Adam Benford and the one responsible for the
                            thermobaric
                            destruction of Raccoon City. Co creator of the C-Virus and co-founder of
                            Neo-Umbrella.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Carla.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>C</span>arla <span>R</span>adames</h2>
                        <p>Was a genius researcher and the one responsible for the discovery and creation of the
                            C-Virus.
                            Eventual founder of Neo-Umbrella.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Evelin.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>E</span>veline <span>E</span>-001</h2>
                        <p>Codenamed E-001, was a genetically-modified human conceived as part of the next
                            generation of
                            bioweapons research conducted by The Connections.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/JackB.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>J</span>ack <span>B</span>acker</h2>
                        <p>Was an American serial killer who kidnapped, murdered and ate over a hundred men and
                            women. The BSSA
                            later determined that his actions were a consequence of his infection with MOLD.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Lucas.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>L</span>ucas <span>B</span>acker</h2>
                        <p>Was a resident of the Baker ranch. He was the son of Jack and Marguerite Baker, and
                            was infected with
                            the psychoactive fungal bio-weapon MOLD.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Marguerite.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>M</span>arguerite <span>B</span>acker</h2>
                        <p>Was a resident of the Baker ranch household. Wife of Jack Baker and she to was
                            infected with the
                            psychoactive fungal bio-weapon MOLD.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Alcina.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>A</span>lcina <span>D</span>imitrescu</h2>
                        <p>Was a mutant human aristocrat.She maintained a pseudo-feudal rule over the peasantry
                            near Castle
                            Dimitrescu as one of the Four Lords of the region.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Karl.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>K</span>arl <span>H</span>eisenberg</h2>
                        <p>Was a human mutant who lived in an Eastern European mountain range. A genius in
                            engineering, he is
                            presumably the patriarch of the Heisenberg family.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Salvatore.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>S</span>alvatore <span>M</span>oreau</h2>
                        <p>Was a mutant human who lived in an Eastern European mountain range. Presumably the
                            last surviving
                            member of the Moreau family, he resided at an abandoned reservoir.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Donna.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>D</span>onna <span>B</span>eneviento</h2>
                        <p>Was a mutant human doll-maker who resided in an Eastern European mountain range.
                            Dressed in a black
                            garb, she was usually seen with her doll, Angie, through which she often
                            communicated.</p>
                    </div>
                </div>
                <div className="slide-ch">
                    <img src="Images-video/Resident-Evil/CH-images/Miranda.jpg" alt="" />
                    <div className="info-ch">
                        <h2><span>M</span>other <span>M</span>iranda</h2>
                        <p>Was an biologist and cult leader. After losing her only daughter to the Spanish flu,
                            she discovered
                            and became infected by the Mold within a nearby cave.</p>
                    </div>
                </div>
                <div className="navigation-ch">
                    <i className="fas fa-chevron-right next-btn" onClick={handleNextClick}></i>
                </div>
            </div>
        </section>
    );
}

export default SliderCH;