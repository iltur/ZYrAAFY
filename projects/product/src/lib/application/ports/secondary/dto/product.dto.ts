export interface ProductDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly description: string;
  readonly order: number;
  readonly total: string;
  readonly plec: boolean;
  readonly quantity: string;
}
