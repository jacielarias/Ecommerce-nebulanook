import '../style sheet/AddToCart.css';
import closeIcon from '../imagenes/x.svg';
import removeIcon from '../imagenes/remove.svg'
import shopping from '../imagenes/shopping.svg';

import Item from './Item';

function AddToCart({ cart, isCartOpen, setCartOpen, setCart, totalProducts}) {

    // Remove Porduct
    const removeProduct = (productId, size) => {
        const updatedCart = cart.filter((product) => !(product.id === productId && product.size === size));
        setCart(updatedCart)
    }

    // Subtracting a product
    const subtractProduct = (productId, size) => {
        const updatedCart = cart.map((product) => {
            if (product.id === productId && product.quantity > 0 && product.size === size) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product
            }).filter((product) => product.quantity !== 0);


            setCart(updatedCart);
      };

    // Adding a product
    const addProduct = (productId, size) => {
        const updatedCart = cart.map((product) => {
            if (product.id === productId && product.size === size) {
                return { ...product, quantity: product.quantity + 1 };
            }
        return product;
        });
        setCart(updatedCart);
    };

    
    // Total
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // Subtotal 
    const subTotal = totalPrice;
    //ShippingPrice
    const shippingPrice = 100.00;
    // Shipping
    const shipping = cart.length !== 0 && subTotal < shippingPrice ? 30.00  : 0;

    // Cart
    return (
        <div className={isCartOpen ? 'cart-content active' : 'cart-content'}>
            <div className='top-cart'>
                <img className='close' src={closeIcon} onClick={() => setCartOpen(false)} />
                <div>
                    <h2 className='cart-title'>
                        <img src={shopping} />
                        Your cart
                        ({totalProducts})
                    </h2>
                    <p className='free-shipping--msg'>
                        {totalPrice < shippingPrice ? 
                            `You need ${'$' + (shippingPrice - totalPrice).toFixed(2) + ' USD'} to unlock free shipping` 
                            : 
                            'Free shipping 🚀'
                        }
                    </p>
                </div>
            </div>
            <div className='cart'>
                {cart.map((item) => (
                    <Item 
                        id= {item.id}  
                        title= {item.title} 
                        price= {item.price}
                        quantity= {item.quantity} 
                        image= {item.image}
                        subtractProduct={()=> subtractProduct(item.id, item.size)}
                        addProduct={()=> addProduct(item.id, item.size)}
                        removeIcon={removeIcon}
                        removeProduct={()=> removeProduct(item.id, item.size)}
                        size={item.size}  
                        selectSize={(newSize) => {
                            const updatedCart = cart.map((cartItem) => 
                                cartItem.id === item.id ? { ...cartItem, size: newSize } : cartItem
                            );
                            setCart(updatedCart);
                        }}
                    />
                ))}
            </div>
            <div className='content-price'>
                <div className='bill'>
                    <p className='sub-total'>
                        <span>SubTotal:</span>
                        <span>${subTotal.toFixed(2)} USD</span>
                    </p>
                    <p className='sub-total'>
                        <span>Shipping:</span>
                        <span>${shipping.toFixed(2)} USD</span>
                    </p>
                    <p className='total-price'>
                        <span>Total:</span>
                        <span>${Number(totalPrice + shipping).toFixed(2)} USD</span>
                    </p>
                </div>
                <button className='checkout'>
                    Checkout
                    <span>${Number(totalPrice + shipping).toFixed(2)} USD</span>    
                </button>
            </div>
        </div>
    )
}

export default AddToCart;