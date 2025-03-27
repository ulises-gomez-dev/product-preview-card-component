import './App.css'
import product from "./assets/images/image-product-desktop.jpg"
import shoppingCart from "./assets/images/icon-cart.svg";

function App() {

  return (
    <div className="card">
      <div className="image">
        <img src={product} alt="product" />
      </div>


      <div className="content">
        <div className="title">
          <h3>PERFUME</h3>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
        </div>
        <div className="price">
          <h1>$149.99</h1>
          <h4>$169.99</h4>
        </div>
        <button>
          <img src={shoppingCart} alt="" />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default App
