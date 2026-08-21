import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  @keyframes orangeGlowPulse {
    0% { box-shadow: 0 0 15px 2px rgba(243, 112, 33, 0.6); }
    100% { box-shadow: 0 0 35px 8px rgba(243, 112, 33, 1); }
  }

  .hero-banner {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 4rem;
    border-radius: 0 50px 50px 0;
    box-shadow: 0 0 25px 5px #f37021;
    animation: orangeGlowPulse 2s infinite alternate;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .coverImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    /* Force aspect ratio distortion */
    * {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      object-fit: fill !important;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #0d121f 0%, #0d121fe0 45%, transparent 100%);
    z-index: 1;
  }

  .pageHeader {
    position: relative;
    z-index: 2;
    padding: 3rem;
    max-width: 60%;
  }

  @media only screen and (max-width: 768px) {
    .hero-banner {
      height: 300px;
      border-radius: 0 30px 30px 0;
    }
    .pageHeader {
      max-width: 100%;
      padding: 1.5rem;
    }
    .overlay {
      background: linear-gradient(90deg, #0d121f 10%, #0d121fe0 60%, transparent 100%);
    }
  }
`;