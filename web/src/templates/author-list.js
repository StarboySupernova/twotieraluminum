import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO
        title="Our Experts"
        description="Meet the dedicated hardware and logistics experts at Two Tier Aluminium Hub."
      />
      <div className="container">
        <PageHeader
          title="Our Experts"
          description="The professionals driving Mutoko's leading hardware and aluminium supply chain."
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/team"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
