import Layout from "../../components/Layout";
import {getArticle, getArticles} from "../../lib/api";

const Article = ({ article, categories }) => {

    return (
        <Layout categories={categories}>
            <h1>{article.attributes.articleTitle}</h1>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articles = await getArticles();

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const article = getArticle(params.slug)

    return {
        props: { article: article[0]},
        revalidate: 1,
    }
}

export default Article;