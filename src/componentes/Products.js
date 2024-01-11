import '../style sheet/ProductList.css'
import add from '../imagenes/plus.svg'

function Products({ openModalProduct, filteredProducts }) {
    //Filter products according to the selected category
    return (
        <div className='content-products'>
            <div className='content-cards'>
                {filteredProducts.map((product) => (
                    <div className='card-product' key={product.id}>

                        <div className='image-content' onClick={() => openModalProduct(product)}>
                            <p className='category-product'>
                                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </p>
                            <img className='product-image' src={product.image} alt={product.title} />
                        </div>

                        <div className='add-to-cart' title='Add to Cart' onClick={() => openModalProduct(product)}>
                            <img className='icon-add-to-cart' src={add} alt='Add to Cart' />
                        </div>

                        <div className='description-product'>
                            <h2 className='product-title'  onClick={() => openModalProduct(product)}> 
                                {product.title.slice(0, 35) + '...'} 
                            </h2>
                            <p className='product-price'>${product.price} USD</p>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    );
}


export default Products;