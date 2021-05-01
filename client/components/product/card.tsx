import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../../../server/product-repo';

type Props = Product;

export const ProductCard = (props: Props) => {
  const { image, name, price, size, mainCategory, id } = props;
  return (
    <Wrapper as={Link} to={`/${mainCategory}/${id}`}>
      <Image src={image} />
      <NameSizeGroup>
        <Name>{name}</Name>
        <Size>{size}</Size>
      </NameSizeGroup>
      <Price>{price} kr</Price>
    </Wrapper>
  );
};

const Image = styled.img`
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 60%;
`;

const Wrapper = styled.button`
  margin: 10px;
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  color: black;
  text-decoration: none;
  &:hover ${Image} {
    transform: scale(1.05);
  }
`;

const Name = styled.div`
  font-weight: bold;
  max-height: 45px;
  overflow: hidden;
`;

const Size = styled.div`
  font-size: 12px;
`;

const NameSizeGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
