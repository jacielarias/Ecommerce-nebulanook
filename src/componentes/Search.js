import x from "../imagenes/x.svg";
function Search(  
{   searchInput,
    results,
    openModalProduct,
    search,
    searcher,
    toggleInput, 
}
){
    return (
        <div className={`search-input-content ${searchInput ? "active" : ""}`}>
        {/*----- Input -----*/}
            <section className="input-content">
                    <input
                        value={search}
                        onChange={searcher}
                        className={`search-input ${searchInput ? "active" : ""}`}
                        type="text"
                        id="name-product"
                        placeholder="Search product..."
                    > 
                    </input>
                    <img
                        src={x}
                        className="close-input-icon"
                        title="close"
                        alt="close"
                        onClick={() => toggleInput()}
                    />
            </section>

                {/*----- Search Results -----*/}
                <h2
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: '900',
                        width: "100%",
                        textAlign: "left",
                        margin: "50px 0 0 10px",
                    }}
                >
                SEARCH RESULTS...
                </h2>

            <section className="section-product-results">
                {results.map((product) => (
                    <div
                        className="section-product-header"
                        key={product.id}
                        onClick={() => openModalProduct(product)}
                    >
                        <div className="image-content-header" title={product.title}>
                            <img
                                className="product-image-header"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                    <section className="desc-content-header">
                        <div className="description-product-header">
                            <h2 className="product-title-header" title="View details">
                                {product.title}
                            </h2>
                        </div>
                     </section>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Search;