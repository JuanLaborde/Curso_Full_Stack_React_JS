import React, { useEffect } from 'react';


import ScrollReveal from 'scrollreveal';

const NewItem = (props) => {
    const { titulo, descripcion, imagen } = props;
    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: '400px',
            duration: 2000,
            delay: 400
        });

        ScrollReveal().reveal('.Title-news', {
            delay: 200,
            origin: 'left'
        });

        ScrollReveal().reveal('.block1', {
            delay: 500,
            origin: 'right'
        });

    }, []);
    

    return (
        <main className="portal-top-news">
            <article className="Initial-page-news">
                <div className="Format-Video-Box-news">
                    <video id="Video-Background-news" src="ImagesVideos/videos/newsback.mp4" autoPlay loop muted></video>
                </div>
                <section className="FormatSectionNews block1">
                    <div className="card-news">
                        <div className="ImgBx">
                            <img src={imagen} alt="" />
                        </div>
                        <div className="content">
                            <div className='details'>
                                <h2>{titulo}</h2>
                                <div className='data'>
                                    <p dangerouslySetInnerHTML={{ __html: descripcion }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>

    );
}

export default NewItem;