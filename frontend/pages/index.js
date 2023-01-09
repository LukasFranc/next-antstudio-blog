import Layout from "../components/Layout";
import Articles from "../components/Articles";
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
      <Layout categories={categories}>
          <Articles articles={articles} />
      </Layout>
  )
}
