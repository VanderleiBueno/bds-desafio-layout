import './styles.css';

import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <div>
          <h6>Nome do Produto</h6>
          <p>lorem ipsum xjfddjhakfjkajfalkjflkaj</p>
        </div>
        <div>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
