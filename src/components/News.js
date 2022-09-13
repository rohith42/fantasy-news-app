import React, { useEffect, useState } from "react";
import { fetchNews } from "../util/https";
import ArticleCard from "./UI/ArticleCard";

function News ({ selected }) {
    let output = "Select a player or team from the left to get started";
    const [articles, setArticles] = useState([])

    async function updateNews() {
        const articlesLocal = await fetchNews(selected);
        setArticles(articlesLocal);
    }

    useEffect(() => {
        if (selected) {
            updateNews();
        }
    }, [selected])

    if (selected) {
        output = `There are ${articles.length} recent articles about ${selected.toUpperCase()}`;
    }

    return (
        <div className="news-component">
            {articles.map(article => <ArticleCard article={article} key={article.title} className="card"/>)}
            <p>{output}</p>
        </div>
    );
}

export default News;