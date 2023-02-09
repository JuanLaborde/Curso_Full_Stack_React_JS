import React, { useEffect } from 'react';

function FFCharacters() {
    useEffect(() => {
        const slideNavs = document.querySelectorAll('.slide-nav-FFCH');

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
        const current = document.querySelector('.flex--active-FFCH').dataset.slide;
        const next = e.currentTarget.dataset.slide;

        if (current === next) {
            return false;
        } else {
            const slideNavs = document.querySelectorAll('.slide-nav-FFCH');
            slideNavs.forEach(slideNav => slideNav.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const nextSlide = document.querySelector(
                `.slider__warpper_FFCH .flex__container_FFCH[data-slide='${next}']`
            );
            nextSlide.classList.add('flex--preStart-FFCH');

            const currentSlide = document.querySelector('.flex--active-FFCH');
            currentSlide.classList.add('animate--end-FFCH');

            setTimeout(() => {
                nextSlide.classList.remove('animate--start--FFCH', 'flex--preStart-FFCH');
                nextSlide.classList.add('flex--active-FFCH');

                currentSlide.classList.add('animate--start--FFCH');
                currentSlide.classList.remove(
                    'animate--end-FFCH',
                    'flex--active-FFCH'
                );
            }, 800);
        }
    };

    return (
        <div className="Content-Slider-FFCH">
            <div className="slider__warpper_FFCH">
                <div className="flex__container_FFCH flex--active-FFCH" data-slide="1H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">CLOUD STRIFE</p>
                            <p className="text--normal--FFCH">An ex-SOLDIER: first class, Cloud came to Midgar to start a new chapter of his life as a mercenary. 
                            At the invitation of his childhood friend, Tifa, he accepted a job with Avalanche. 
                            He may bring his buster sword to bear against Shinra troopers, but he does not care for plight of the planet. 
                            For him, this is a job and nothing more.</p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH" src="https://fyre.cdn.sewest.net/end-plus/607ef9d8b43f5a0012ac7e0b/characters_full_cloud-PzAunrqjl.png?width=2100&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="2H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">AERITH GAINSBOROUGH</p>
                            <p className="text--normal--FFCH">Aerith is a flower seller who lives in the Sector 5 slums, who first meets Cloud on the streets of Midgar after the bombing of Mako Reactor 1. 
                            Shinra has kept a close eye on her ever since she was a child, as she has the ability to hear the voice of the planet. 
                            She is often found tending a modest bed of flowers at an old church in Sector 5.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH" src="https://fyre.cdn.sewest.net/end-plus/607efc91b43f5a0012acf2b2/characters_full_aerith-W33bQkMl5.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="3H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">TIFA LOCKHART</p>
                            <p className="text--normal--FFCH">A loyal member of Avalanche─an underground organization opposed to Shinra─Tifa also runs Seventh Heaven, a popular bar in the Sector 7 slums. 
                            Although she bears a terrible grudge towards Shinra, she is not convinced that bombing mako reactors is the solution. 
                            As she struggled to reconcile her cause with her conscience, Tifa was reunited with her childhood friend, Cloud, for the first time in years...
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607efdfcb43f5a0012ad12b4/characters_full_tifa-8K851Mt1K.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="4H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">BARRET WALLACE</p>
                            <p className="text--normal--FFCH">The leader of an independent Avalanche cell in Midgar, Barret was disavowed by the old guard for his extreme methods that attracted too much attention. 
                            He subsequently came to Midgar, where he resolved to continue to pursue his vendetta against Shinra with a small but trusted group of followers. 
                            When not fighting against the corporation, he and his comrades serve in the neighborhood watch and keep the people safe─including his daughter Marlene, who he dotes on as a loving father.</p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607effe754ca700013dee103/characters_full_barret-K80Kyaz1p.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="5H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">RED XIII</p>
                            <p className="text--normal--FFCH">Red XIII is a beast with a flaming tail, crimson fur, deadly claws, and the ability to speak. 
                            At present, he is being held in capitivity as a test subject for Professor Hojo.
                            He is memeber of an old tribe in Cosmo Canyon, who´s protect their land from any person or beast, who want to damage them.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607f01a7b43f5a0012ad2696/characters_full_redxiii-l80V55yN4.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="6H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">YUFFIE KISARAGI</p>
                            <p className="text--normal--FFCH">A member of Wutai's elite corps of ninja operatives, Yuffie styles herself as both a ravishing beauty and a world-class materia hunter. 
                            Using her signature oversized throwing star and exceptional agility, she is a force to be reckoned with. 
                            Determined to reclaim her homeland's former glory—and acting on orders from the government—she sneaks into Midgar.</p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/608acfdd9063680013122fe7/characters_full_yuffie-HvzeEoD27.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="7H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">PRESIDENT SHINRA</p>
                            <p className="text--normal--FFCH">Current president of the Shinra Electric Power Company, he single-handedly raised the company up from a small arms manufacturer to the massive conglomerate it is today. 
                            He employs cutthroat business tactics to secure profits, going so far as to eliminate any who oppose him. However, he's openhanded to those lucky enough to be in his good graces.</p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH" src="https://fyre.cdn.sewest.net/end-plus/607fed61b43f5a0012ae87bd/characters_full_shinra-fILUwGPz4.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="8H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">HEIDEGGER</p>
                            <p className="text--normal--FFCH">The director of Public Security, this former commanding officer has been President Shinra's right-hand man since the early days of the company. 
                            The president trusts him implicitly, which has made Public Security the most powerful division within Shinra. Like the president, Heidegger is ruthless, and will not hesitate to sacrifice others to get what he wants.</p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607fee4a54ca700013e01ed2/characters_full_heidegger-JtMzqg7fD.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="9H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">RENO</p>
                            <p className="text--normal--FFCH">A member of the Turks―a special task force within Shinra's General Affairs Division. 
                            Reno stands out due to his fiery-red hair, sardonic grin, and cavalier attitude. 
                            Using lightning-quick movements and a specially outfitted truncheon, he toys with his opponents as he unleashes a myriad of attacks.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607feb4454ca700013e0090a/characters_full_reno-eGN8-aOTK.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="10H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">RUDE</p>
                            <p className="text--normal--FFCH">A member of the Turks―a special task force within Shinra's General Affairs Division. 
                            Rude is an intimidating presence with his shaved head, sunglasses, and massive frame. 
                            He speaks only when absolutely necessary and prefers to use his bare fists and physical prowess to subdue his enemies.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607febdbb43f5a0012ae8545/characters_full_rude-qvWhDglJo.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="11H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">PROFESSOR HOJO</p>
                            <p className="text--normal--FFCH">Director of Shinra Electric Power Company’s Research and Development Division. 
                            He develops various biological weapons, without a care for ethics or morals. 
                            If it’s for the sake of his work, he won’t hesitate to take a human life for his experiments. 
                            In his previous collaborative research work he performed special surgery on soldiers, increasing their physical power and succeeded in giving birth to SOLDIERs.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607fefea54ca700013e03158/characters_full_hojo-xq17_Po3d.png?width=900&quality=80" alt="" />
                    </div>
                </div>
                <div className="flex__container_FFCH animate--start--FFCH" data-slide="12H">
                    <div className="flex__item_FFCH flex__item_FFCH--left">
                        <div className="flex__content_FFCH">
                            <p className="text--sub--FFCH">SEPHIROTH</p>
                            <p className="text--normal--FFCH">A former SOLDIER who distinguished himself as a hero in the war against Wutai. 
                            His accomplishments on the battlefield are so legendary that they inspired countless people to join the military. 
                            Official reports state that he died while on a classified mission, though details of the incident are almost nonexistent.
                            </p>
                        </div>
                    </div>
                    <div className="flex__item_FFCH flex__item_FFCH--right faded">
                        <img className="SH__img_FFCH"
                            src="https://fyre.cdn.sewest.net/end-plus/607fe916b43f5a0012ae6e2e/characters_full_sephiroth-zpBPft55u.png?width=900&quality=80" alt="" />
                    </div>
                </div>

            </div>
            <div className="slider__navi_FFCH">
                <figure href="#" className="slide-nav-FFCH btn-image1FFCH active" data-slide="1H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image2FFCH" data-slide="2H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image3FFCH" data-slide="3H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image4FFCH" data-slide="4H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image5FFCH" data-slide="5H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image6FFCH" data-slide="6H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image7FFCH" data-slide="7H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image8FFCH" data-slide="8H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image9FFCH" data-slide="9H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image10FFCH" data-slide="10H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image11FFCH" data-slide="11H"></figure>
                <figure href="#" className="slide-nav-FFCH btn-image12FFCH" data-slide="12H"></figure>
            </div>
        </div>
    );
}

export default FFCharacters;