import Layout from "../components/Layout";
import ArticlesList from "../components/ArticlesList";
import {getArticles, getCategories} from "../lib/api";

export async function getStaticProps() {
    const articles = await getArticles()
    const categories = await getCategories()
    return {
        props: {articles, categories},
        revalidate: 1
    }
}

export default function Home({ articles, categories }) {
  return (
      <Layout categories={categories} contentClass='homepage'>
          <ArticlesList articles={articles} articlesLimit={4} />
      </Layout>
  )
}
