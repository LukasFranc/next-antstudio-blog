async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(
        `${
            process.env.API_URL || 'https://next-antstudio-blog.up.railway.app'
        }/graphql`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    )

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export function getStrapiURL(path = "") {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

export async function getArticles() {
    const data = await fetchAPI(`query Articles {
        articles(sort: "articleDate:desc") {
            data {
                id
                attributes {
                    slug
                    articleTitle
                    articleDate
                    articleContent
                    articleHeadImage {
                        data {
                            id
                            attributes {
                                url
                            }
                        }
                    }
                    category {
                     data{
                      id
                      attributes {
                        categoryName
                      }
                    }
                    }
                }
            }
        }
    }`)
    return data.articles.data
}

export async function getArticle(slug) {
    const data = await fetchAPI(`query Articles($slug: String!) {
        articles(filters: {slug: {eq: $slug}}) {
          data {
            id
            attributes {
              slug
              articleTitle
              articleDate
              articleContent
              articleHeadImage {
                data {
                    id
                    attributes {
                        url
                    }
                }
              }
              category {
                data{
                  id
                  attributes {
                   categoryName
                  }
                }
              }
            }
          }
        }
    }`,
        { variables: { slug } }
    )
    return data.article.data
}

export async function getCategories() {
    const data = await fetchAPI(`query Categories {
        categories {
            data{
              id
              attributes {
                categoryName
              }
            }
        }
    }`
    )
    return data.categories.data
}

// export async function getHomepage() {
//     const data = await fetchAPI(`query Homepage {
//         homepage {
//             data{
//                 id
//                 attributes {
//                     mainHero {
//                         id
//                         heroTitle
//                         heroSubTitle
//                         heroDescription
//                         heroMainImageOrientation
//                         heroMainImage {
//                             data {
//                                 id
//                                 attributes {
//                                     url
//                                 }
//                             }
//                         }
//                         heroButton {
//                             buttonTitle
//                             buttonUrl
//                         }
//                     }
//                     mainSections {
//                         id
//                     }
//                 }
//             }
//         }
//     }`
//     )
//     return data.homepage.data.attributes
// }

// export async function getCategory(id) {
//     const data = await fetchAPI(
//         `query Category($id: ID!) {
//     category(id: $id) {
//       id
//       name
//       articles {
//         id
//         title
//         content
//         image {
//           url
//           alternativeText
//         }
//         category {
//           id
//           name
//         }
//       }
//     }
//   }
// `,
//         { variables: { id } }
//     )
//     return data.category
// }