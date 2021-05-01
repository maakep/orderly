import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import keys from '../keys';

export type Product = {
  name: string;
  description: string;
  price: number;
  mainCategory: string;
  subCategories: string[];
  image: string;
  size: string;
  status: ProductStatus;
};

export type Category = {
  name: string;
  size: number;
};

export type ProductsAndCategories = {
  products: Product[];
  categories: Category[];
};

export enum ProductStatus {
  Available,
  Pending,
  Sold,
  Hidden,
}

let dataCache = null;
let cacheExpired = null;
const CACHE_MILLISECONDS = 60 * 60 * 1000; // Hour

export async function loadData(): Promise<ProductsAndCategories> {
  if (dataCache && Date.now() < cacheExpired) {
    return dataCache;
  }

  const doc = new GoogleSpreadsheet(keys.sheetId);
  await doc.useServiceAccountAuth(keys.google);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows({ offset: 0, limit: 0 });

  const products = extractProducts(rows);
  const categories = extractAndBuildCategories(products);

  dataCache = { products: products, categories: categories };
  cacheExpired = Date.now() + CACHE_MILLISECONDS;
  return dataCache;
}

function extractProducts(rows: GoogleSpreadsheetRow[]): Product[] {
  return rows.map((r) => {
    let i = 0;
    let data = r['_rawData'];

    return {
      name: data[i++],
      description: data[i++],
      price: data[i++],
      mainCategory: data[i++],
      subCategories: (data[i++] as string)?.split(',') || [],
      image: data[i++] || 'https://via.placeholder.com/100?text=x',
      size: data[i++] || '',
      status:
        ProductStatus[data[i++] as keyof typeof ProductStatus] ||
        ProductStatus.Hidden,
    };
  });
}

function extractAndBuildCategories(products: Product[]): Category[] {
  const categories = products.reduce((acc: Category[], curr) => {
    const existing = acc.find((x) => x.name == curr.mainCategory);

    if (existing) {
      existing.size++;
    } else {
      acc.push({
        name: curr.mainCategory,
        size: 1,
      });
    }

    return acc;
  }, []);
  return categories;
}
