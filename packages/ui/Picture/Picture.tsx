import styled from 'styled-components';

export const Picture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  object-fit: cover;
  height: 100%;
  & > * {
    display: flex;
  }
`;
