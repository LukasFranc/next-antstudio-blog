import Layout from "../components/Layout";
import ArticlesList from "../components/ArticlesList";
import {getArticles, getCategories} from "../lib/api";

export async function getStaticProps() {
    const articles = await getArticles()
    const categories = await getCategories()
    return {
        props: {articles, categories},
    }
}

export default function Home({ articles, categories }) {
  return (
      <Layout categories={categories} contentClass='articleList articleList--homePage'>
          <ArticlesList articles={articles} articlesLimit={5} />
      </Layout>
  )
}
