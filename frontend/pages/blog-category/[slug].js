import Layout from "../../components/Layout";
import {getCategories, getCategoryArticles, getCategory} from "../../lib/api";
import ArticlesList from "../../components/ArticlesList";
const Category = ({ articles, categories, category }) => {

    return (
        <Layout categories={categories} contentClass='articlesList articlesList--category '>
                <section className='section'>
                    <h1>{category.attributes.categoryName}</h1>
                </section>
                <ArticlesList articles={articles} />
        </Layout>
    );
};

export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map((category) => ({
            params: {
                slug: category?.attributes.slug,
            },
        })),
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const articles = await getCategoryArticles(params.slug)
    const category = await getCategory(params.slug)
    const categories = await getCategories()
    return {
        props: { articles: articles, category: category[0], categories: categories},
        revalidate: 10,
    }
}

export default Category;