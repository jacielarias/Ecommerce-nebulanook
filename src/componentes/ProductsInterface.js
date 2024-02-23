import '../style sheet/ProductsInterface.css';

import Products from './Products';
import Products2 from './Products2';

function ProductsInterface ({displayInterface, openModalProduct, filteredProducts, openDesciption, openDesc}){

    return (
        <div id="productsInterface" className='interface-content'>   
            {displayInterface === 'interface#1' && 
            <Products 
                customClassName="product-image"
                openModalProduct={openModalProduct}
                filteredProducts={filteredProducts}  
            />}
            {displayInterface === 'interface#2' && 
            <Products2 
                customClassName="product-image"
                openModalProduct={openModalProduct}
                filteredProducts={filteredProducts}
                openDesciption={openDesciption}
                openDesc={openDesc}
            />}
        </div>
    )
}

export default ProductsInterface;