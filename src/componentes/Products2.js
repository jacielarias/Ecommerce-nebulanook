import '../style sheet/ProductList2.css';
import LazyLoadedImage from './LazyLoading';

function Products2({ openModalProduct, filteredProducts, customClassName }) {

    return (
        <div className='content-products--2'>
            <div className='content-cards--2'>
                {filteredProducts.map((product) => (
                    <div className='card-product--2' key={product.id}>
                        <div className='image-content--2' title={product.title}>
                            <p className='category-product--2'>
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </p>
                            <LazyLoadedImage className={customClassName} src={product.image} alt={product.title} />
                        </div>
                        <section className='desc-content'>
                            <div className='description-product--2'>
                                <h2 className='product-title--2' title='View details' onClick={() => openModalProduct(product)}> 
                                 {product.title} 
                                </h2>
                                <p className='desc-product-text'>{product.description}</p>
                                <div className='add-to-cart-content--2'>
                                    <p className='product-price--2'>${product.price} USD</p>
                                </div>
                                <button className='add-to-cart--2' title='Add to Cart' onClick={() => openModalProduct(product)}>
                                Add To cart
                                </button>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
       </div>
    )
}

export default Products2;