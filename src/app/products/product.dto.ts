import { Product } from './product.model'

//Uses omit to avoid fields in object
export interface createProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

//Uses omit to choose specific fields in object
type example = Pick<Product, 'color' | 'description'>

//Partial set all attributes as optional
export interface UpdateProductDto extends Partial<createProductDTO> {}

//Required ask for all attributes
export interface UpdateProductDtoRequired extends Required<createProductDTO> {}
