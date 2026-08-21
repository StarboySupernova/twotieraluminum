import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;

  @keyframes goldGlowPulse {
    0% { box-shadow: 0 0 15px 2px rgba(212, 175, 55, 0.6); }
    100% { box-shadow: 0 0 35px 8px rgba(212, 175, 55, 1); }
  }

  .blog-cover-image {
    width: 100%;
    height: 400px;
    margin-bottom: 3rem;
    border-radius: 50px 0 50px 0;
    box-shadow: 0 0 25px 5px var(--primary);
    animation: goldGlowPulse 2s infinite alternate;
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

  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .blog-cover-image {
      height: 250px;
      border-radius: 30px 0 30px 0;
    }
  }
`;