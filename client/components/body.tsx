import * as React from 'react';
import styled from 'styled-components';
import { CONTENT_BODY_WIDTH } from '../../shared/constants';

export const Body = (props) => {
  return (
    <BodyWrapper>
      <BodyContent>{props.children}</BodyContent>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const BodyContent = styled.div`
  width: ${CONTENT_BODY_WIDTH}px;
`;
