require("dotenv").config("./.env");
const sanityConfig = require("./sanity-config.js");

module.exports = {
  siteMetadata: {
    title: `Two Tier Aluminium Hub`,
    siteUrl: `https://twotieraluminium.netlify.app`, // Update when you have your new URL
    description: `Quality Hardware. Endless Solutions. Supplying premium aluminium profiles, hardware, tools, and accessories.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID || "lai2gfj7",
        dataset: process.env.SANITY_DATASET || "production",
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }

        } 
        `,
        /* ref, index et. al. is to let the plugin know the result of the graphql query, and also specifieis for it what result we expect from the query */
        /* data is the result of the query */
        ref: "id",
        index: ["title"],
        store: ["id", "title", "publishedAt", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `categories`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityCategory {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `activities`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityActivity {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityActivity.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `authors`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityAuthor {
            nodes{
              id
              name
              slug {
                current
              }
              profileImage {
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["name"],
        store: ["id", "name", "slug", "profileImage"],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `objectives`,
        engine: `flexsearch`,
        engineOptions: { tokenize: "forward" },
        query: `
          {
            allSanityObjective {
              nodes { id, title }
            }
          } 
          `,
        ref: "id",
        index: ["title"],
        store: ["id", "title"],
        normalizer: ({ data }) =>
          data.allSanityObjective.nodes.map((node) => ({
            id: node.id,
            title: node.title,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `values`,
        engine: `flexsearch`,
        engineOptions: { tokenize: "forward" },
        query: `
          {
            allSanityValue {
              nodes { id, title }
            }
          } 
          `,
        ref: "id",
        index: ["title"],
        store: ["id", "title"],
        normalizer: ({ data }) =>
          data.allSanityValue.nodes.map((node) => ({
            id: node.id,
            title: node.title,
          })),
      },
    },
  ],
};

//sanity studio api token for the custom seeding script
//skQR5One7RAzTiV1spBstZAKKu3lBB6dWtBYTIPtAKvQTnDLvZOLNkpkiszbkTfkL2AGYPENKzr53OyV9t2EHOguJQXFXTgHEC5y3ytMeWz4Jv8hDfslUwJPzsjfXNfhJZR1xq6SKeoMoovz4tP4vg5PYAIzSpBfszfdTx1FW2pbnUTLzL5r