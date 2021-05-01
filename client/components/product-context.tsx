import * as React from 'react';
import { ProductsAndCategories } from '../../server/product-repo';

export const ProductCategoryContext = React.createContext<ProductsAndCategories>(
  null
);
