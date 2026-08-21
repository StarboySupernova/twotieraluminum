import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

export const query = graphql`
  query SingleActivity($id: String!) {
    sanityActivity(id: { eq: $id }) {
      title
      _rawDescription
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleActivity({ data }) {
  const activity = data.sanityActivity;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Two Tier Aluminum - ${activity.title}`} />
          
          <PageHeader title={activity.title} className="pageHeader">
            <MyPortableText value={activity._rawDescription} />
          </PageHeader>
          
          {activity.coverImage && (
            <GatsbyImage
              image={activity.coverImage.asset.gatsbyImageData}
              alt={activity.coverImage.alt || activity.title}
              className="coverImage"
            />
          )}
          
          <hr style={{ margin: '2rem 0', opacity: '0.1' }} />
          <div className="body-content">
            <MyPortableText value={activity._rawBody} />
          </div>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleActivity;