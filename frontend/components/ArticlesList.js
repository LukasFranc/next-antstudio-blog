import Card from "./Card";

const ArticlesList = ({articles, articlesLimit = 99}) => {
    return (
        <div className='articleList'>
            {articles?.map((article, i) => {
                if (i < articlesLimit - 1) {
                    return (
                        <div key={i} className="articleList__item">
                            <Card
                                article={article}
                                key={article.id}
                            />
                        </div>
                    );
                }
            })}

        </div>
    );
};

export default ArticlesList;