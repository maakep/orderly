import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Category } from '../../server/product-repo';
import { Cart } from '../icons/cart';
import { COLORS, CONTENT_BODY_WIDTH } from '../../shared/constants';

type PropType = {
  menuItems: Category[];
};

export const Header = (props: PropType) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LeftGroup>
          <LogoLink to={'/'}>
            <Logo src="https://via.placeholder.com/100?text=x" />
          </LogoLink>
          {props.menuItems.map((c) => (
            <Navigation key={c.name} to={`/${c.name.toLowerCase()}`}>
              {c.name} ({c.size})
            </Navigation>
          ))}
        </LeftGroup>
        <RightGroup>
          <CartWrapper>
            <CartIcon x={28} y={28} />
          </CartWrapper>
        </RightGroup>
      </HeaderContent>
    </HeaderWrapper>
  );
};

const CartWrapper = styled.div`
  height: 100%;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartIcon = styled(Cart)``;

const LogoLink = styled(Link)`
  height: 100%;
  padding-right: 20px;
  min-width: 65px;
`;

const Logo = styled.img`
  height: 100%;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.header.background};
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${CONTENT_BODY_WIDTH}px;
`;

const LeftGroup = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const RightGroup = styled(LeftGroup)``;

const Navigation = styled(Link)`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: ${COLORS.header.color};
`;
