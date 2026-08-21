import styled from 'styled-components';

export const CustomImageStyles = styled.div`
  .custom-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    overflow: hidden;
  }

  .custom-image [data-gatsby-image-wrapper] {
    width: 100% !important;
    height: auto !important;
  }

  .custom-image img {
    object-fit: contain !important;
    width: 100% !important;
    height: auto !important;
  }
`;