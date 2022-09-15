import React, { useContext, useEffect, useState } from "react";
import RosterContext from "../store/roster-context";
import { fetchNews } from "../util/https";
import ArticleCard from "./UI/ArticleCard";

function News () {
    const [articles, setArticles] = useState([])
    const { selected } = useContext(RosterContext);

    async function updateNews() {
        const articlesLocal = await fetchNews(selected);
        setArticles(articlesLocal);
    }

    useEffect(() => {
        if (selected) {
            updateNews();
        } else {
            setArticles([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    let output = "Select a player or team from the left to get started";
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