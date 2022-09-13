import React from "react";
import Card from 'react-bootstrap/Card';

function ArticleCard ({ article }) {
    const { source, author, title, description, link, imageUrl, datePublished } = article;

    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{`${author}, ${source} | ${datePublished}`}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link}>Read Full Article</Card.Link>
            </Card.Body>
        </Card>
    );
}   

export default ArticleCard;
