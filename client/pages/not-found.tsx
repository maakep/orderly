import * as React from 'react';
import styled from 'styled-components';

export const NotFound = ({}) => {
  return <Splash>404</Splash>;
};

const Splash = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;
