import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #0A0500, #000000); /* Dark orange/black gradient */
  border-top: 1px solid rgba(243, 112, 33, 0.2);
  .footer__logo-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem; /* Adds some nice breathing room below the logo */
  }
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--white-1);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block; 
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;
