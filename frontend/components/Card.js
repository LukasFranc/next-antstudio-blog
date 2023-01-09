import Link from "next/link";
import AntImage from "./AntImage";

const Card = ({ article }) => {
    return (
        <Link href={`/article/${article.attributes.slug}`}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-body">
                        <p id="title" className="uk-text-large">
                            {article.attributes.articleTitle}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;