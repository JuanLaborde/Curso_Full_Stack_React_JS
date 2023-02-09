import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const CultHistory = () => {
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.logo-position', {
            delay: 200,
            origin: 'left'
        });

        ScrollReveal().reveal('.Nav-sh', {
            delay: 200,
            origin: 'left'
        });

        ScrollReveal().reveal('.text-from-left1', {
            delay: 500,
            origin: 'left'
        });
        ScrollReveal().reveal('.Image-metatron', {
            delay: 500,
            origin: 'right'
        });
        ScrollReveal().reveal('.Halo-of-Sun', {
            delay: 600,
            origin: 'left'
        });
        ScrollReveal().reveal('.text-from-right', {
            delay: 600,
            origin: 'right'
        });
        ScrollReveal().reveal('.Image-cult', {
            delay: 700,
            origin: 'right'
        });
        ScrollReveal().reveal('.text-from-left', {
            delay: 700,
            origin: 'left'
        });
        ScrollReveal().reveal('.slider__navi_HIS', {
            delay: 300,
            origin: 'right'
        });
        ScrollReveal().reveal('.flex__container_HIS', {
            delay: 300,
            origin: 'left'
        });
    }, []);

    return (
        <div className="History-cult">
            <div className="Text-Format-Cult">
                <img className="Image-metatron" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675078739/Silent-Hill-Characters/SH-Cult/Seal-metatron_lezld6.png" alt="" />
                <p className="text-from-left1">When Silent Hill became a tourist location around the 1900s, the
                    Order was formed at the same
                    time, and were despised by most of the local citizens, thus their union was carried out in
                    secret. With time, the cult infiltrated the public institutions of the town, gradually
                    gaining
                    more influence and power.</p>
                <br />
                <p className="text-from-left1">The Order used the plant White Claudia for its mystical and
                    hallucinogenic properties and to
                    create the drug PTV, which they used for their ceremonies, and also distributed to the
                    populace
                    of Silent Hill.</p>
                <br />
                <p className="text-from-left1">They believes they are the "one true faith" and "one true religion",
                    and all other religions
                    are
                    deceits and false truths. It is ambiguous if this is true, or if it is make-believe fantasy
                    manifested by the ancient power of Silent Hill.</p>
                <br />
                <img className="Halo-of-Sun" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675078741/Silent-Hill-Characters/SH-Cult/Halo-of-sun_j2ufno.png" alt="" />
                <p className="text-from-right">The cult's official seal is known as the Halo of the Sun and is often
                    used or seen in the
                    presence of cult members, particularly while conducting rituals. The Order is involved with
                    esoteric occultism, black magic (sometimes referred as the dark arts), arcane ceremonies,
                    and
                    blood sacrifices.</p>
                <br />
                <p className="text-from-right">This cult seems to follow a philosophy of moral nihilism and moral
                    relativism; they do not
                    believe in the concepts of "good" and "evil", only chaos and order, and feel this justifies
                    their ways. They believe in God, Paradise, sins, souls, Purgatory, and Hell. They also
                    perform
                    and believe in gyromancy.</p>
                <br />
                <p className="text-from-right">The Order believes that humanity and society is corrupt, full of
                    suffering and a lost cause,
                    and
                    that they are among the elite "chosen people" to bring about a new world unstained by evil.
                    Claudia believes that happy people are most often the cruelest and humanity has been
                    contaminated by greedy and earthly material and base desires.</p>
                <br />
                <img className="Image-cult" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675078738/Silent-Hill-Characters/SH-Cult/Myth4_jbcwmg.webp" alt="" />
                <p className="text-from-left">The Order's main goal, as many of its members state, is to usher in
                    the apocalypse and
                    deliver
                    the faithful to Paradise. This Paradise means many different things to different members,
                    but
                    the goals remain the same; this is brought about in ways that vary from sect to sect. Some
                    try
                    to actively aid it while others simply prepare for the inevitable. The prevalent belief of
                    the
                    Order is that a true god can only know salvation and offer utopia via being born and exposed
                    to
                    an aura of madness and agony, hence their belief that the Otherworld is a just existence and
                    the
                    work of God.</p>
                <br />
                <p className="text-from-left">The Order believes they will witness the second coming of God, who
                    will cause the apocalypse
                    by
                    cleansing the entire world with pure fire, bringing mankind to extinction. Then after the
                    judgment and atonement in Purgatory, God will make the final decision to send human souls to
                    eternal damnation or to an eternity of bliss. Many of their beliefs are seen in the Prayer
                    to
                    God memo.</p>
                <br />
                <p className="text-from-left">As stated on several occasions, the Order does not believe in terms of
                    "good" or "evil", only
                    "chaos" and "order". Their ways are cruel and brutal, to ensure order remains in place. To
                    ensure loyalty and discipline, many children under the Order's care are cruelly treated and
                    disciplined harshly. Ironically, despite murder being one of the greatest sins in their
                    faith, human life is essentially inconsequential to them, as evidenced by their willingness
                    to sacrifice and kill to appease God.</p>

            </div>
        </div>
    );
}

export default CultHistory;