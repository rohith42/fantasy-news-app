import axios from "axios"

const NEWSAPI_KEY = "fef236e5a5b848bc8da3d7cded53e5e7";

// @param searchTerm - string, fetches news with that searchTerm
export async function fetchNews(searchTerm) {
    const baseurl = "https://newsapi.org/v2/top-headlines?";
    const url = `${baseurl}q=${searchTerm}&apiKey=${NEWSAPI_KEY}`;

    const response = await axios.get(url);
    const articles = [];

    for (let article of response.data.articles) {
        const articleObj = {
            source: article.source.name,
            author: article.author,
            title: article.title,
            description: article.description,
            link: article.url,
            imageUrl: article.urlToImage,
            datePublished: article.publishedAt 
        };
        articles.push(articleObj);
    }
    
    return articles;
}