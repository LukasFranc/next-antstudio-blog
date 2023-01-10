import Link from "next/link";
import AntImage from "./AntImage";

const Card = ({ article }) => {
    return (
        <Link key={article.id} href={`/article/${article.attributes.slug}`}>
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large">
                            {article.attributes.articleTitle}
                        </p>
                    </div>
                </div>
        </Link>
    );
};

export default Card;