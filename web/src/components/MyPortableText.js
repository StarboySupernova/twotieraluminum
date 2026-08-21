import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { CustomImageStyles } from '../styles/CustomImageStyles';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <CustomImageStyles>
          <GatsbyImage
            image={gatsbyImageData}
            alt={value.alt}
            className="bodyImage custom-image"
          />
        </CustomImageStyles>
      );
    },
  },
};

function MyPortableText({ value }) {
  return (
    <PortableText
      value={value}
      components={components}
      projectId={process.env.GATSBY_SANITY_PROJECT_ID || "lai2gfj7"}
      dataset={process.env.GATSBY_SANITY_DATASET || "production"}
    />
  );
}

export default MyPortableText;