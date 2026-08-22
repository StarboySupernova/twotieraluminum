import styled, { keyframes } from 'styled-components';

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`;

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  overflow: hidden;

  .card-stack-wrapper {
    display: flex;
    justify-content: center;
    padding: 6rem 0 12rem 0;
    perspective: 1000px;
  }

  .card-stack-container {
    position: relative;
    width: 100%;
    max-width: 750px;
    height: 380px;
  }

  .stacked-card {
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 40px;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: -15px 20px 50px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Desktop Fan-Out */
    transform: 
        translate(calc(var(--card-offset) * 60px), calc(var(--card-offset) * 20px)) 
        rotate(calc(var(--card-offset) * -2deg))
        scale(calc(1 - var(--card-offset) * 0.05));
  }

  /* Interaction Pulse Hint */
  .pulse-hint {
    animation: ${wiggle} 4s ease-in-out infinite;
  }

  .interaction-hint {
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    gap: 8px;
    svg { width: 12px !important; height: 12px !important; animation: spin 4s linear infinite; }
  }

  @keyframes spin { 100% { transform: rotate(360deg); } }

  /* --- SLEEK PROFESSIONAL GRADIENTS --- */
  .theme-yellow {
    background: linear-gradient(145deg, #FFD700 0%, #F37021 100%);
    color: #000;
    .card-icon { background: rgba(0,0,0,0.1); color: #000; }
    .interaction-hint { color: #000; }
  }

  .theme-dark {
    background: linear-gradient(145deg, #1a1a1c 0%, #050505 100%);
    border: 1px solid rgba(243, 112, 33, 0.4);
    color: #fff;
    .card-icon { background: var(--primary); color: #000; }
  }

  .theme-slate {
    background: linear-gradient(145deg, #2e2e35 0%, #1c1c1f 100%);
    color: #fff;
    .card-icon { background: rgba(255,255,255,0.1); color: #fff; }
  }

  .card-depth-1 { filter: brightness(0.7) blur(0.5px); }
  .card-depth-2 { filter: brightness(0.4) blur(1.5px); }

  .card-header h3 { font-size: 2.4rem; font-weight: 800; }
  .card-icon { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .card-body p { font-size: 1.6rem; line-height: 1.6; margin-top: 20px; }

  /* --- MOBILE: TILTED VERTICAL STACK --- */
  @media only screen and (max-width: 768px) {
    .card-stack-wrapper {
      padding: 4rem 0 15rem 0;
    }
    .card-stack-container {
      height: 480px;
      max-width: 85%;
    }
    .stacked-card {
      /* Maintaining the Fan effect vertically with a stylistic tilt */
      transform: 
        translateY(calc(var(--card-offset) * 60px)) 
        translateX(calc(var(--card-offset) * -10px))
        rotate(calc(var(--card-offset) * 3deg)) 
        scale(calc(1 - var(--card-offset) * 0.06));
      padding: 30px;
    }
    .card-header h3 { font-size: 1.8rem; }
    .card-body p { font-size: 1.4rem; }
  }

  @media only screen and (max-width: 480px) {
    .card-stack-container { height: 550px; }
  }

  .centre__text {
    text-align: center;
  }
`;