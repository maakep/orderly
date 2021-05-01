import * as React from 'react';
import styled from 'styled-components';
import { Spinner } from '../shared/spinner';

export function SplashScreen() {
  return (
    <Splash>
      <div>
        <Spinner />
      </div>
    </Splash>
  );
}

const Splash = styled.div`
  width: 100%;
  height: 100%;
  justify-content: 'center';
  align-items: 'center';
`;
