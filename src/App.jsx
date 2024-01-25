import { MainRouter } from "./router/MainRouter";
import { CartProvider } from "./context/CartContext";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (    
    <div className="me-app-style">
      <CartProvider>
       <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;