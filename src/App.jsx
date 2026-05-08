import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { userDataContext } from "./context/UserContext";
import About from "./pages/About";
import Contact from './pages/Contact';
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PlaceOrder from './pages/PlaceOrder';
import Order from "./pages/Order";
import OrderPlaced from "./pages/OrderPlaced";
import NotFound from "./pages/NotFound";
import Ai from "./components/Ai";

const App = () => {
  let { userData } = useContext(userDataContext);

  return (
    <>
      {userData && <Navbar />}

      <Routes>
        <Route path="/" element={userData ? <Home /> : <Navigate to="/login" />} />

        <Route path="/register" element={userData ? <Navigate to="/" /> : <Register />} />

        <Route path="/login" element={userData ? <Navigate to="/" /> : <Login />} />

        <Route path="/about" element={userData ? <About /> : <Navigate to="/login" />} />

        <Route path="/contact" element={userData ? <Contact /> : <Navigate to="/login" />} />

        <Route path="/collections" element={userData ? <Collections /> : <Navigate to="/login" />} />

        <Route path="/product" element={userData ? <Product /> : <Navigate to="/login" />} />

        <Route path="/productdetail/:productId" element={userData ? <ProductDetails /> : <Navigate to="/login" />} />

        <Route path="/cart" element={userData ? <Cart /> : <Navigate to="/login" />} />

        <Route path="/placeorder" element={userData ? <PlaceOrder /> : <Navigate to="/login" />} />

        <Route path="/orderplaced" element={userData ? <OrderPlaced /> : <Navigate to="/login" />} />

        <Route path="/order" element={userData ? <Order /> : <Navigate to="/login" />} />

        <Route path="*" element={userData ? <NotFound /> : <Navigate to="/login" />} />
      </Routes>

      {userData && <Ai />}
    </>
  );
};

export default App;
