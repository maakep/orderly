import * as React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductCategoryContext } from '../components/product-context';
import { Row } from '../components/layouts';
import { COLORS } from '../../shared/constants';
import { Cart } from '../icons/cart';

export const ProductPage = ({}) => {
  const params = useParams() as any;
  const pnc = React.useContext(ProductCategoryContext);
  const product = pnc.products.find((x) => x.id == params.product);

  const {
    image,
    id,
    price,
    name,
    description,
    mainCategory,
    size,
    status,
    subCategories,
  } = product;

  const onAddToCart = () => {
    console.log('köp');
  };

  return (
    <Wrapper>
      <BreadcrumbsBar>
        /hem/{mainCategory}/{name.toLowerCase()} |{' '}
        {subCategories?.map((c) => (
          <React.Fragment key={c}>{c}</React.Fragment>
        ))}
      </BreadcrumbsBar>
      <ProductImage src={image} />
      <InfoWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Price>{price} kr</Price>
        <AddToCart onClick={onAddToCart}>
          KÖP <CartIcon x={18} y={18} />
        </AddToCart>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BreadcrumbsBar = styled.div`
  height: 25px;
  font-size: 0.7rem;
  width: 100%;
  line-height: 25px;
`;

const ProductImage = styled.img`
  width: 60%;
`;

const InfoWrapper = styled.div`
  padding-left: 20px;
  flex-grow: 1;
`;

const Name = styled.h1`
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 0.8rem;
  min-height: 64px;
  margin-bottom: 16px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const AddToCart = styled.button`
  background: ${COLORS.product.atc.background};
  border-radius: 2px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

const CartIcon = styled(Cart)`
  margin-left: 15px;
`;
