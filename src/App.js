import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Vender from './componentes/Vender';
import Inventario from './componentes/Inventario';
import Clientes from './componentes/Clientes';
import Proveedores from './componentes/Proveedores';
import Default from './componentes/default';


function App() {
  return (
   <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Navbar/>}>  
        <Route path='/' element={<Inicio/>}/>
        <Route path='vender' element={<Vender/>}/>
        <Route path='inventario' element={<Inventario/>}/>
        <Route path='clientes' element={<Clientes/>}/>
        <Route path='proveedores' element={<Proveedores/>}/>
        <Route path='*' element={<Default/>}/>
      </Route>
    </Routes>
   </div>
  );
}

export default App;
