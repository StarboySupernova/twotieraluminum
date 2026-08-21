import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  .pageHeader {
    position: relative;
    padding: 2rem 0;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #0d121f, #0d121fe0 30%, #4a46eb14);
      z-index: -1;
    }
  }

  .coverImage {
    width: 100%;
    height: 400px;
    margin-bottom: 4rem;
    border-radius: 0 50px 50px 0;
    box-shadow: 0 0 25px 5px #f37021; /* Different orange glowing edge */
    overflow: hidden;

    /* Force aspect ratio distortion */
    * {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      object-fit: fill !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 0;
      &:after {
        display: none;
      }
    }
    .coverImage {
      height: 250px;
      border-radius: 0 30px 30px 0;
    }
  }
`;