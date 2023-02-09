import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewItem from '../components/layout/News/NewItem';
import '../styles/components/layout/Footer.css';
import '../styles/components/pages/newsPage.css';

const NewsPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [news, setNewsPage] = useState([]);

    useEffect(() => {
        const cargarNewsPage = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/news');
            setNewsPage(response.data);
            setLoading(false);
        };
        cargarNewsPage();
    }, []);

    return (
        <section className="newsGrid">
            {loading ? (
                <p>Loading....</p>
            ) : (
                news.map(item => <NewItem key={item.id}
                    titulo={item.title} imagen={item.image}
                    descripcion={item.description} />)
            )}

        </section>
    );
}

export default NewsPage;