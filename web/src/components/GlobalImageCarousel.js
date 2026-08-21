import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CarouselWrapper } from '../styles/GlobalImageCarouselStyles';

function GlobalImageCarousel() {
  const data = useStaticQuery(graphql`
    {
      allSanityImageAsset {
        nodes {
          id
          gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  `);

  const images = data.allSanityImageAsset?.nodes || [];

  // Triplicate array to create a seamless infinite scroll loop based on the -33.33% shift
  const loopedImages = [...images, ...images, ...images];

  if (images.length === 0) return null;

  return (
    <CarouselWrapper>
      <div className="carousel-track">
        {loopedImages.map((img, idx) => (
          <div className="carousel-item" key={`${img.id}-${idx}`}>
            <GatsbyImage
              image={img.gatsbyImageData}
              alt="Gallery Image"
            />
          </div>
        ))}
      </div>
    </CarouselWrapper>
  );
}

export default GlobalImageCarousel;