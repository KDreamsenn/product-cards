export const enum Currency{
    rub = 'RUB',
    usd = 'USD',
    eur = 'EUR'
}

export interface ProductCardProps {
    title: string;
    origin: string;
    price: number;
    currency: Currency;
    imageUrl: string
}
  