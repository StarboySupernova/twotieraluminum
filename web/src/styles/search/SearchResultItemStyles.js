import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  }

  .img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--white);
  }

  .categoriesText {
    font-size: 1.3rem;
    color: var(--gray);
  }

  .authorProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;