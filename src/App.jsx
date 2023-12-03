//--> Components
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


//--> Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



const App = () => {

  return (

    <div className="navBar">
      <NavBarComponent />
      <ItemListContainer greeting={"Descubre las últimas tendencias. ¡Explora nuestra colección ahora!"} />
    </div>

  );

};

export default App;