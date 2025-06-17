import type { Currency } from "src/shared/config/productsConfig/productsConfig";



export default function formatPrice(price:number , currency: Currency): string {
    const amount = price / 100; 
    
    const locale: Record<Currency, string> = {
      RUB: 'ru-RU',
      USD: 'en-US',
      EUR: 'de-DE'
    };


    return new Intl.NumberFormat(locale[currency], {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        currencyDisplay: 'symbol'
      }).format(amount)
  };