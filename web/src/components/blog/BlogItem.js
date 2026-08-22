import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';
import { FiCalendar } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa'; // Added icon for the pill button

function BlogItem({ path, title, image, categories =[], publishedAt, prefix }) {
  return (
    <BlogItemStyles>
      {/* 1. Card Image */}
      <Link to={`/${prefix}/${path}`} className="img-link">
        {image?.imageData && (
          <GatsbyImage
            image={image.imageData}
            alt={image.altText || title}
            className="img"
          />
        )}
      </Link>
      
      {/* 2. Card Title */}
      <Link to={`/${prefix}/${path}`} className="title-link">
        <Title className="title">{title}</Title>
      </Link>
      
      {/* 3. Metadata (Date & Category) */}
      <div className="meta-container">
        {publishedAt && (
          <ParagraphText className="publishedAt">
            <FiCalendar />
            {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
          </ParagraphText>
        )}
        {categories.length > 0 && (
          <ParagraphText className="categoriesText">
            <BiCategory />
            <span>
              {categories.map((item, index) => (
                <span key={item.slug.current}>
                  <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
                  {index < categories.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
          </ParagraphText>
        )}
      </div>

      {/* 4. The SVG-Inspired Pill Button */}
      <Link to={`/${prefix}/${path}`} className="action-pill-link">
        <div className="action-pill">
          <div className="icon-circle">
            <FaChevronRight />
          </div>
          <span>Explore Guide</span>
        </div>
      </Link>
    </BlogItemStyles>
  );
}

export default BlogItem;