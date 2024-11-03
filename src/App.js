import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import CreateProduct from "./CreateProduct";
import ViewProducts from "./ViewProducts";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProduct from "./ViewProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
          <Routes>
            <Route path="/products" element={<ViewProducts />} />
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<ViewProduct />} />
          </Routes>
          <Routes>
            <Route path="/create-product" element={<CreateProduct />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
