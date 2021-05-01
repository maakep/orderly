import * as React from 'react';
import styled from 'styled-components';
import { COLORS, CONTENT_BODY_WIDTH } from '../../shared/constants';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent></FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.footer.background};
  color: ${COLORS.footer.color};
`;

const FooterContent = styled.div`
  width: ${CONTENT_BODY_WIDTH}px;
  height: 100%;
`;
