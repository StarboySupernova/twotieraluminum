import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @keyframes goldGlowPulse {
    0% { box-shadow: 0 0 15px 2px rgba(212, 175, 55, 0.6); }
    100% { box-shadow: 0 0 35px 8px rgba(212, 175, 55, 1); }
  }

  .blog-cover-image {
    width: 100%;
    height: 450px;
    margin-bottom: 4rem;
    border-radius: 50px 0 50px 0;
    box-shadow: 0 0 25px 5px var(--primary);
    animation: goldGlowPulse 2s infinite alternate;
    overflow: hidden;
    * { width: 100% !important; height: 100% !important; }
    img { object-fit: fill !important; }
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .meta-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .badge {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.4rem;
    color: var(--white);
    transition: 0.3s ease;
    
    svg { color: var(--primary); font-size: 1.6rem; }
    a { color: var(--white); }
    
    &:hover {
      background: rgba(212, 175, 55, 0.1);
      border-color: var(--primary);
      transform: translateY(-2px);
    }
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    padding: 4rem;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    margin-bottom: 4rem;
    
    h1, h2, h3, h4 { margin: 2rem 0 1rem 0; color: var(--primary); }
    p { font-size: 1.6rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--white-1); }
  }

  @media only screen and (max-width: 768px) {
    .blog-cover-image { height: 250px; border-radius: 30px 0 30px 0; }
    .title { font-size: 2.5rem; }
    .glass-card { padding: 2rem; }
  }
`;