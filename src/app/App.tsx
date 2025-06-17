import { useEffect, useState } from 'react'
import type { ProductCardProps } from 'src/shared/config/productsConfig/productsConfig'
import { ProductCard } from 'src/widgets/ProductCard'
import './styles/app.scss'
import './styles/index.scss'


function App() {
  useEffect(()=>{
    setTimeout(()=>{
      fetch('/public/data.json')
        .then(res => res.json())
        .then(data => {
          const productsList: ProductCardProps[] = data.products
          setProducts(productsList)
          setIsLoading(false)
        })
    }, 600)
        
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<ProductCardProps[]>([])
  console.log(products)
  return (
    <>
      <div className="app">
      <h1>Каталог товаров</h1>
      <div className="products">
        {
        isLoading
        ?<h2>Loading...</h2>
        : products.map(
          (product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            origin={product.origin}
            price={product.price}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />))
        }
      </div>
    </div>
    </>
  )
}

export default App
