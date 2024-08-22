export class CreateProductDto {
  identifier: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}
