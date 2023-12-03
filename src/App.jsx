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
      <ItemListContainer />
    </div>

  );

};

export default App;