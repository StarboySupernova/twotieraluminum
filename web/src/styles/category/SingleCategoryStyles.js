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
    border-radius: 0 50px 50px 0;
    box-shadow: 0 0 25px 5px #f37021;
    animation: orangeGlowPulse 2s infinite alternate;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .coverImage {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%; z-index: 0;
    * { width: 100% !important; height: 100% !important; }
    img { object-fit: fill !important; }
  }

  .overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(90deg, #0d121f 0%, #0d121fe0 45%, transparent 100%);
    z-index: 1;
  }

  .pageHeader {
    position: relative;
    z-index: 2;
    padding: 3rem;
    max-width: 60%;
    
    /* Overrides the new global PageHeader style specifically for the banner */
    > div {
      background: transparent !important;
      backdrop-filter: none !important;
      border: none !important;
      box-shadow: none !important;
      text-align: left !important;
      padding: 0 !important;
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 5;
    margin-top: -4rem; /* Floating Overlap Effect */
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 4rem;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }

  .posts-heading {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary);
  }

  @media only screen and (max-width: 768px) {
    .hero-banner { height: 300px; border-radius: 0 30px 30px 0; }
    .pageHeader { max-width: 100%; padding: 1.5rem; }
    .overlay { background: linear-gradient(90deg, #0d121f 10%, #0d121fe0 60%, transparent 100%); }
    .content-wrapper { padding: 2rem; margin-top: -2rem; }
  }
`;