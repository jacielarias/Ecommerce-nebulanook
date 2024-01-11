import descIcon from '../../imagenes/desc.svg'

function DescriptionProduct({ openDesciption, openDesc, description }) {
  return (
    <div className="description-select-product" onClick={openDesc}>
      <div className="btn-desc">
        <p className="title-desc">
          <img src={descIcon} /> DESCRIPTION
        </p>
        <p className="icon-desc-select-product">{openDesciption ? "-" : "+"}</p>
      </div>
      <div
        className="content-description-select-product"
        style={{
          maxHeight: openDesciption ? "80px" : "0",
        }}
      >
        <p className="select-product-desc">{description}</p>
      </div>
    </div>
  );
}


export default DescriptionProduct;
