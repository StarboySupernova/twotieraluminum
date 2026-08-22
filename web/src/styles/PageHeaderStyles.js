import styled from 'styled-components';

export const PageHeaderStyles = styled.div`
  margin: 3rem auto 6rem auto;
  max-width: 800px;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 4rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 5px solid var(--primary);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    color: var(--white);
  }

  p {
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem;
    h2 { font-size: 2.8rem; }
    p { font-size: 1.4rem; }
  }
`;