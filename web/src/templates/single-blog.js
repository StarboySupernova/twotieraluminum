import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";
import { BiCategory } from "react-icons/bi";
import { FiCalendar, FiUser } from "react-icons/fi";
import PageSpace from "../components/PageSpace";
import ParagraphText from "../components/typography/ParagraphText";
import { Title } from "../components/typography/Title";
import { SingleBlogStyles } from "../styles/blog/SingleBlogStyles";
import MyPortableText from "../components/MyPortableText";
import SEO from "../components/seo";

/// id coming from context defined in gatsby-node
export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

/// data is the result of the query
function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  return (
    <SingleBlogStyles>
      <SEO title={`Two Tier Aluminum - ${blog.title}`} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          {blog.coverImage && (
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt || blog.title}
              className="blog-cover-image"
            />
          )}
          <div className="header-content">
            <Title className="title">{blog.title}</Title>
            <div className="meta-badges">
              <span className="badge"><FiCalendar /> {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}</span>
              <span className="badge"><FiUser /> <Link to={`/team/${blog.author.slug.current}`}>{blog.author.name}</Link></span>
              {blog.categories.map((item) => (
                <span className="badge" key={item.slug.current}>
                  <BiCategory /> <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
                </span>
              ))}
            </div>
          </div>
          
          <div className="body glass-card">
            <MyPortableText value={blog._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlog;