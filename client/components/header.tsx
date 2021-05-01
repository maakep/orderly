import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Category } from '../../server/product-repo';
import { Cart } from '../icons/cart';

type PropType = {
  menuItems: Category[];
};

export const Header = (props: PropType) => {
  return (
    <HeaderWrapper>
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
`;

const Logo = styled.img`
  height: 100%;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  background-color: #d2d2d2;
  justify-content: space-between;
`;

const LeftGroup = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const RightGroup = styled(LeftGroup)``;

const Navigation = styled(Link)`
  padding: 10px;
`;
