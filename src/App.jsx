import './App.css'
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Index from "./pages/index";
import Cart from "./pages/cart";
import Create from "./pages/create";
import Perfil from './pages/perfil';
import Catalogo from "./pages/catalogo";
import View from "./pages/view";
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Index />}/>
    <Route path="cart" element={<Cart />}/>
    <Route path="create" element={<Create />}/>
    <Route path="perfil" element={<Perfil />} />
    <Route path="catalogo" element={<Catalogo />} />
    <Route path="/catalogo/view/:id" element={<View />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
