import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  @keyframes goldGlowPulse {
    0% { box-shadow: 0 0 15px 2px rgba(212, 175, 55, 0.6); }
    100% { box-shadow: 0 0 35px 8px rgba(212, 175, 55, 1); }
  }

  .author-header {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 5rem 3rem 4rem 3rem;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-top: 10rem; /* Space for the floating image */
    position: relative;
  }
  
  .profileImage {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 25px 5px var(--primary);
    animation: goldGlowPulse 2s infinite alternate;
    border: 4px solid var(--black-1);
  }
  
  .name {
    margin-top: 80px;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  
  .bio {
    margin: 0 auto;
    max-width: 600px;
    p { font-size: 1.6rem; color: rgba(255,255,255,0.8); }
  }
  
  .hr {
    margin: 5rem 0 3rem 0;
    border-color: rgba(255,255,255,0.05);
  }
  
  .latest-posts-heading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: var(--primary);
    text-align: center;
  }
`;