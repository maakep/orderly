import * as React from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage = ({}) => {
  const params = useParams() as any;
  return (
    <div>
      category: {params.category}, product: {params.product}
    </div>
  );
};
