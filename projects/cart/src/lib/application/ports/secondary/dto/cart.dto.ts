export interface CartDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly description: string;
  readonly order: number;
  readonly plec: boolean;
  readonly quantity: string;
  readonly total: string;
}
