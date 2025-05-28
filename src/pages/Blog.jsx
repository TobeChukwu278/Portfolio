import React, { useEffect, useState } from 'react';

const DevNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // 1. Add error state

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/news`
                );
                const data = await response.json();
                if (data.status !== "ok") throw new Error(data.message);
                setArticles(data.articles);
            } catch (error) {
                setError(error.message); // 2. Set error
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const renderSkeletons = () => {
        return Array.from({ length: 4 }).map((_, i) => (
            <div
                key={i}
                className="bg-gray-800 animate-pulse rounded-2xl shadow-md overflow-hidden"
            >
                <div className="h-48 bg-gray-700" />
                <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-700 rounded w-3/4" />
                    <div className="h-3 bg-gray-700 rounded w-full" />
                    <div className="h-3 bg-gray-700 rounded w-5/6" />
                    <div className="h-2 bg-gray-700 rounded w-1/3 mt-2" />
                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Latest Dev News</h2>
            {error && (
                <div className="text-red-400 text-center mb-4">
                    {error}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading
                    ? renderSkeletons()
                    : articles.map((article, index) => (
                        <div data-aos='fade-up'
                            key={index}
                            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
                        >
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div data-aos='fade-up' data-aos-delay='200' className="p-4">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-blue-400 hover:underline"
                                >
                                    {article.title}
                                </a>
                                <p data-aos='fade-up' data-aos-delay='400' className="text-sm text-gray-300 mt-2">{article.description}</p>
                                <p className="text-xs text-gray-500 mt-4">
                                    {new Date(article.publishedAt).toLocaleString()} - {article.source.name}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DevNews;