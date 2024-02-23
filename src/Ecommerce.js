import React, { useRef, useEffect, useState } from 'react';
// Components
import CategoryList from "./componentes/CategoryList";
import Header from "./componentes/Header";
import AddToCart from "./componentes/AddToCart";
import ModalProduct from "./componentes/ModalProduct/ModalProduct";
import ProductsInterface from "./componentes/ProductsInterface";
import Promotions from "./componentes/Promotions";
import Benefits from "./componentes/Benefits";
import Slider from "./componentes/Slider";
import Faqs from "./componentes/Faqs/FAQs";
import Footer from "./componentes/Footer";


function Ecommerce() {
    //Display Products
    const [products, setProducts] = useState([]);
    //Display Categories
    const [categories, setCategories] = useState([]);
    // Cart - open / close
    const [cart, setCart] = useState([]);
    //Category Filter
    const [selectedCategory, setSelectedCategory] = useState("All");
    //Open Cart
    const [isCartOpen, setCartOpen] = useState(false);
    //Open Search Input
    const [searchInput, setSearchInput] = useState(false);
    //Search Product
    const [search, setSearch] = useState("");
    // Open Modal Product
    const [selectedProduct, setSelectedProduct] = useState(false);
    // Products Interface
    const [displayInterface, setDisplayInterface] = useState("interface#1");
    //Consume API
    async function useAPI(url, funcSetItems, errorMsj) {
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
                funcSetItems(data.filter((product) => product.category !== 'electronics' && product !== 'electronics'));
                    } catch (error) {
                    console.error(errorMsj, error);
                }
            };

        fetchData();
        }, [url, funcSetItems, errorMsj]);
    }
    
    //Get Products
    useAPI(
        "https://fakestoreapi.com/products",
        setProducts,
        "Error al obtener productos:"
    );
    //Get Categories
    useAPI(
        "https://fakestoreapi.com/products/categories",
        setCategories,
        "Error al obtener categorias:"
    );

    const filteredProducts =
        selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    let results = [];

    // Filter Input Results
    if (!search) {
        results = [];
    } else {
        results = products.filter((data) => {
        return data.title.toLowerCase().includes(search.toLocaleLowerCase());
        });
    }

    // Total products 
    const totalProducts = cart.reduce((acc, product) => acc + product.quantity, 0);

    // Add to cart
    const addToCart = (product, size) => {
        const productInCart = cart.find(
        (item) => item.id === product.id && item.size === size
        );
    
        const newItem =
        product.category === "men's clothing" ||
        product.category === "women's clothing"
            ? { ...product, size: size }
            : product;
    
        if (productInCart) {
        const updatedCart = cart.map((item) =>
            item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
        } else {
        setCart([...cart, { ...newItem, quantity: 1 }]);
        }
    };
    // Display selected Category
    const manejarClick = (category) => {
        setSelectedCategory(category);
    };
    // Open Cart
    const openCart = () => {
        setCartOpen(true);
    };
    // Open Modal Product
    const openModalProduct = (product) => {
        setSelectedProduct(product);
    };
    // Display Interface Products
    const displayInterfaceProduct = (newInterface) => {
        setDisplayInterface(newInterface);
    };
    // Search Imput
    const searcher = (e) => {
        setSearch(e.target.value);
    };
    // Toggle search Input
    const toggleInput = () =>{
        setSearch('')
        setSearchInput(!searchInput)
    }
    
    return (
        <div>
            <Header 
                openCart={openCart} 
                totalProducts={totalProducts} 
                setSearchInput={setSearchInput}
                searchInput={searchInput}
                search={search}
                searcher={searcher}
                toggleInput={toggleInput}
                results={results}
                openModalProduct={openModalProduct}
            />
            <Slider />
            <AddToCart
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                setCart={setCart}
                totalProducts={totalProducts}
            />
            <CategoryList
                categories={categories}
                manejarClick={manejarClick}
                selectedCategory={selectedCategory}
                isCartOpen={isCartOpen}
                displayInterfaceProduct={displayInterfaceProduct}
                displayInterface={displayInterface}
            />
            <ProductsInterface
                filteredProducts={filteredProducts}
                selectedCategory={selectedCategory}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
                openModalProduct={openModalProduct}
                displayInterface={displayInterface}
                displayInterfaceProduct={displayInterfaceProduct}
            />
            <Promotions />
            <Faqs />
            <Benefits />
                {selectedProduct && (
                    <ModalProduct
                        selectedProduct={selectedProduct}
                        onCloseModalProduct={() => setSelectedProduct(false)}
                        addToCart={addToCart}
                        setCartOpen={setCartOpen}
                    />
                )}
            <Footer />
        </div>
    )
}


export default Ecommerce;