import * as React from 'react';
import { useParams } from 'react-router-dom';

export const CategoryPage = ({}) => {
  const params = useParams() as any;
  return <div>category: {params.category}</div>;
};
