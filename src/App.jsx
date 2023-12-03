//--> Components
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


//--> Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



const App = () => {

  return (

    <div className="me-app-style">

      <div className="me-navBar-style">
        <NavBarComponent />
      </div>

      <div className="me-itemListContainer-style">
        <ItemListContainer greeting={"Descubre las últimas tendencias. ¡Explora nuestra colección ahora!"} />
      </div>

    </div>

  );

};

export default App;