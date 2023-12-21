import { MainRouter } from "./router/MainRouter";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (    

    <div style={{ width: '100vw', height: '100vh' }}>

      <div>
        <MainRouter />
      </div>

   {/*    <div>
        <h1>Bienvenida</h1>
        <h2>Descubre las últimas tendencias. ¡Explora nuestra colección ahora!</h2>
      </div> */}

    </div>
  );
};

export default App;