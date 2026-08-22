import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 2000;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Darker Overlay */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  .modal__container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 80px;
    max-height: calc(100% - 120px);
    width: 90%;
    max-width: 650px; /* Made wider for premium search feel */
    background: rgba(11, 17, 32, 0.95);
    padding: 3rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
    display: flex;
    flex-direction: column;
    
    .close {
      position: absolute;
      transform: translateY(-100%);
      top: -15px;
      right: 0;
      border-color: rgba(255,255,255,0.2);
      color: var(--white);
      background: rgba(255,255,255,0.05);
      &:hover {
        background-color: crimson;
        border-color: crimson;
      }
    }
    .search__result {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      overflow-y: auto;
      padding-right: 10px;
      
      /* Beautiful Custom Scrollbar for results */
      &::-webkit-scrollbar { width: 6px; }
      &::-webkit-scrollbar-track { background: transparent; }
      &::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.5); border-radius: 4px; }
    }
  }
  @media only screen and (max-width: 768px) {
    .modal__container { padding: 2rem; }
  }
`;