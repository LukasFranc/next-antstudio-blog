import Link from "next/link";
import AntImage from "./AntImage";

const Card = ({ article }) => {
    return (
        <Link key={article.id} href={`/blog/${article.attributes.slug}`} className='articleCard'>
            <AntImage image={article.attributes.articleHeadImage} />
            <h3 className="card__title">
                {article.attributes.articleTitle}
            </h3>
            <div className="card__category">
                {article.attributes.category.data.attributes.categoryName}
            </div>
        </Link>
    );
};

export default Card;