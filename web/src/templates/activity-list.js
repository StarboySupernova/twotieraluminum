import React from "react";
import { graphql } from "gatsby";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import PageHeader from "../components/PageHeader";
import ActivityGrid from "../components/category/ActivityGrid";
import Pagination from "../components/Pagination";

export const ActivityListQuery = graphql`
  query activitiesQuery($limit: Int!, $offset: Int!) {
    allSanityActivity(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Activity({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const activities = data.allSanityActivity.nodes;

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the operational pillars and services offered by Two Tier Aluminium Hub in Mutoko, including custom sizing, bulk procurement, and retail support."
      />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Our Services"
            description="Comprehensive hardware and aluminium solutions tailored for contractors, builders, and DIY enthusiasts."
          />
          <ActivityGrid activities={activities} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/activities"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Activity;
