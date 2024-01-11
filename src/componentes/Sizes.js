function Sizes({size, selectSize}){
    return (
        <select 
            className='select-size item-select-size' 
            title="Select Size" 
            value={size} 
            onChange={(e) => selectSize(e.target.value)}
        >
            <option value="XXXL">XXL</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="S">S</option>
        </select>
    )
}


export default Sizes;