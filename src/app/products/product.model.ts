import {Category} from '../categories/category.model';
import { BaseModel } from './../base.model';
import { createProduct } from '../../05-optionals';

export type Sizes = 'S' | 'M' | 'L' | 'XL';


export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
