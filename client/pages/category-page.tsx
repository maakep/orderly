import * as React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductCategoryContext } from '../components/product-context';
import { ProductCard } from '../components/product/card';

export const CategoryPage = ({}) => {
  const params = useParams() as any;
  const pnc = React.useContext(ProductCategoryContext);
  const products = pnc.products.filter(
    (x) => x.mainCategory == params.category
  );
  return (
    <div>
      <h1>{params.category?.toUpperCase()}</h1>
      <FlexGrid>
        {products?.map((p, i) => (
          <ProductCard {...p} key={i} />
        ))}
      </FlexGrid>
    </div>
  );
};

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
