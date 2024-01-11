import { useState } from 'react';
//Icons
import closeIcon from '../../imagenes/x.svg'
//CSS
import '../../style sheet/ModalProduct.css';
import '../../style sheet/Sizes.css';
//Components
import Sizes from '../Sizes';
import DescriptionProduct from './DescriptionProduct';

function ModalProduct ({ selectedProduct, onCloseModalProduct, addToCart, setCartOpen }){
    const [size, setSize] = useState('XXXL');
    const [openDesciption, setOpenDescription] = useState(false);

    let newItem = selectedProduct.category === "men's clothing" || selectedProduct.category === "women's clothing"
        ? { ...selectedProduct, size: size }
        : selectedProduct;

    let isClothingProduct =
        newItem.category === "men's clothing" || newItem.category === "women's clothing";
    
    function closeModalAndOpenMenu() {
        addToCart(newItem, size);
        onCloseModalProduct();
        setCartOpen(true);
    }

    function selectSize(value) {
        setSize(value);
    };

    function openDesc() {
        setOpenDescription(!openDesciption)
    }

    return (
        <section className="modal-product-overlay" style={{display: selectedProduct ? 'flex' : 'none'}}>
            <div className="modal-content">
            <img className='close-icon' src={closeIcon} onClick={() => onCloseModalProduct()} />
                <div className='modal-details'>
                    <div className='modal-image-content'>
                        <img src={selectedProduct.image}/>
                    </div>
                    <div className='modal-desc-content'>
                        <div className='modal-desc'>
                            <p className='category-text'>
                               {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                            </p>
                            <h2>{selectedProduct.title}</h2>
                            <DescriptionProduct 
                                openDesciption={openDesciption} 
                                openDesc={openDesc}
                                description={selectedProduct.description}
                            />
                            {isClothingProduct && (
                                <Sizes size={size} selectSize={selectSize}/>
                            )}
                            <h3>${selectedProduct.price} USD</h3>
                            <button className='btn-add-to-cart' onClick={() => closeModalAndOpenMenu()}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModalProduct;