import Layout from "../../components/Layout";
import {getArticle, getArticles, getCategories} from "../../lib/api";
import AntImage from "../../components/AntImage";
import {useEffect, useState} from "react";

const Article = ({ article, categories }) => {
    const articleDate = new Date(article.attributes.articleDate)
    const [dateFormatted, setDateFormatted] = useState();

    const [articleMainData, setArticleMainData] = useState();

    useEffect(() => {
        setDateFormatted(articleDate.toLocaleDateString());
    }, []);

    useEffect(() => {
        console.log('call')
        setArticleMainData(article)
    }, [article]);

    return (
        <Layout categories={categories} contentClass='articleDetail'>
            <section className='section section--stripe section__mainImage'>
                <AntImage image={article.attributes.articleHeadImage} />
            </section>
            <section className='section'>
                <h1>{articleMainData?.attributes.articleTitle}</h1>
                <h1>{article.attributes.articleTitle}</h1>
                <div className='categoryName'>{article.attributes.category.data.attributes.categoryName}</div>
                <div className='publishedDate'>{dateFormatted}</div>
                <div className='textContent' dangerouslySetInnerHTML={{__html: article.attributes.articleContent}}></div>
            </section>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articles = await getArticles();
    return {
        paths: articles.map((article) => ({
            params: {
                slug: article?.attributes.slug,
            },
        })),
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const article = await getArticle(params.slug)
    const categories = await getCategories()
    return {
        props: { article: article[0], categories: categories},
        revalidate: 10,
    }
}

export default Article;