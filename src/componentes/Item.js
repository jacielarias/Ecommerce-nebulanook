import '../style sheet/Item.css';
import '../style sheet/Sizes.css';

import Sizes from './Sizes';

function Item(
        {id, 
        title, 
        price, 
        quantity, 
        image, 
        subtractProduct, 
        addProduct, 
        removeIcon, 
        size, 
        selectSize, 
        removeProduct}
        ){

        return (
            <div className='added-product' key={id}>
                <div className='info-content'>
                    <div className='left-image'>
                        <img className='image-product' src={image} alt={title} />
                        <div className='quantity'>
                            <span className='control-quantity control-quantity-1  substract' onClick={subtractProduct}>-</span>
                            <span className='count'>{quantity}</span>
                            <span className='control-quantity control-quantity-2 add' onClick={addProduct}>+</span>
                        </div>
                    </div>
                    <div className='product-description'>
                        <span className='remove-icon' title='Remove Product' onClick={removeProduct}><img src={removeIcon} /></span>
                        <p className='desc'>{title.slice(0, 35) + '...'}</p>
                        {size && (
                            <Sizes size={size} selectSize={selectSize}/>
                        )}
                        <p className='price'>${(price * quantity).toFixed(2)} USD</p>
                    </div>
                 </div>
            </div>
    )
}

export default Item;