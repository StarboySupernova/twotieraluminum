import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33333%); }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: var(--black-2);
  padding: 3rem 0;
  border-top: 1px solid rgba(243, 112, 33, 0.2);
  position: relative;
  -webkit-overflow-scrolling: touch;
  cursor: grab;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--black-1);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(243, 112, 33, 0.5);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(243, 112, 33, 0.8);
  }

  &:active {
    cursor: grabbing;
  }

  .carousel-track {
    display: flex;
    width: max-content;
    animation: ${scroll} 40s linear infinite;
    gap: 2rem;
    padding: 0 2rem;

    &:hover {
      animation-play-state: paused;
    }
  }

  .carousel-item {
    width: 300px;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;
    border: 2px solid rgba(255, 204, 0, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    * {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      object-fit: cover !important;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 768px) {
    .carousel-item {
      width: 220px;
      height: 150px;
    }
  }
`;