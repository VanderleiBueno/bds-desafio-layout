import MainImage from 'assets/images/main-image.png';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="base-container home-container">
      <div className="home-card">
        <div className="home-card1">
          <div className="home-content-container">
            <div className="home-content-align">
              <h1>O Carro Perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-img-container">
            <img src={MainImage} alt="Imagem" />
          </div>
        </div>
        <div className="base-card home-card2">
          <div className="home-content2-container">
            <div className="home-btn-container">
            <NavLink to="/products" activeClassName="active"><ButtonIcon/></NavLink>
            </div>
          </div>
          <div className="home-title-container">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
