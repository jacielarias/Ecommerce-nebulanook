import React, { useEffect, useState } from 'react';

//API
import { useAPI } from './API/API_Call';

// Components
import CategoryList from "./componentes/CategoryList";
import Header from "./componentes/Header";
import Search from './componentes/Search';
import AddToCart from "./componentes/AddToCart";
import ModalProduct from "./componentes/ModalProduct/ModalProduct";
import ProductsInterface from "./componentes/ProductsInterface";
import Promotions from "./componentes/Promotions";
import Benefits from "./componentes/Benefits";
import Slider from "./componentes/Slider";
import Faqs from "./componentes/Faqs/FAQs";
import Footer from "./componentes/Footer";
import Form from './componentes/Form';

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
    
    // Consumir API usando el hook personalizado
    const { data: productsData } = useAPI(
        "https://fakestoreapi.com/products",
        "Error al obtener productos:"
    );
    const { data: categoriesData } = useAPI(
        "https://fakestoreapi.com/products/categories",
        "Error al obtener categorías:"
    );

    // Asignar los datos una vez que la API responde
    useEffect(() => {
        setProducts(productsData.filter((product) => product.category !== 'electronics'));
    }, [productsData]);

    useEffect(() => {
        setCategories(categoriesData);
    }, [categoriesData]);

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
        <>
            <Header 
                openCart={openCart} 
                totalProducts={totalProducts} 
                toggleInput={toggleInput}
            />
            <Search                 
                setSearchInput={setSearchInput}
                searcher={searcher}
                toggleInput={toggleInput}
                openModalProduct={openModalProduct}
                results={results}
                searchInput={searchInput}
                search={search}
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
            <Form />
            <Footer />
            </>
    )
}


export default Ecommerce;