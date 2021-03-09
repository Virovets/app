import {ICategory} from './category-interface';

export interface ItemInterface {
  description: string;
  image: string;
  manufacturer: string;
  model: string;
  name?: string;
  price: number;
  shipping: number;
  sku: number;
  type: string;
  ups: string;
  url: string;
  categories: ICategory[];
}
