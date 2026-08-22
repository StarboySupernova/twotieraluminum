import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
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
`;

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Two Tier Aluminum-${category.title}`} />
          
          <div className="hero-banner">
            {category.coverImage && (
              <GatsbyImage
                image={category.coverImage.asset.gatsbyImageData}
                alt={category.coverImage.alt || category.title}
                className="coverImage"
              />
            )}
            <div className="overlay"></div>
            <PageHeader title={category.title} className="pageHeader">
              <MyPortableText value={category._rawDescription} />
            </PageHeader>
          </div>
          
          <div className="content-wrapper">
            <BlogGrid blogs={blogs} />
          </div>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;