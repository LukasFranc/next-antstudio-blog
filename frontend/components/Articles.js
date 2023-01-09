import Card from "./Card";

const Articles = ({ articles }) => {
    return (
        <div className='articleList'>
            <div className="articleList__item">
                {articles.map((article, i) => {
                    return (
                        <Card
                            article={article}
                            key={article.attributes.slug}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Articles;