import type { ProductCardProps } from "src/shared/config/productsConfig/productsConfig";
import formatPrice from "src/shared/lib/formatPrice/formatPrice";
import MyImage from "src/shared/ui/MyImg/MyImg";
import styles from './ProductCard.module.scss';
export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    origin,
    price,
    currency,
    imageUrl
  }) => {
    return (
      <div className={styles.card}>
        
        <MyImage image={{src: imageUrl, width: 300, alt: title }}/>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.details}>
            <span className={styles.origin}>{origin}</span>
            <span className={styles.price}>{formatPrice(price, currency)}</span>
          </div>
        </div>
      </div>
    );
  };
  
export default ProductCard