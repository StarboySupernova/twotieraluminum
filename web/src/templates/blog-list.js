import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
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

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO
        title="Hardware & Construction Blog"
        description="Read the latest guides, contractor tips, and DIY tutorials from Two Tier Aluminium Hub."
      />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Our Blog"
            description="Expert advice, product spotlights, and structural hardware guides."
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/spotlight"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;
