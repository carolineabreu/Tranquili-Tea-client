import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import TeaList from "./pages/TeaList";
import Navabar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
// import { TeaCard } from "./pages/List.Ecommerce/TeaPage.js";
// import { Teas } from "./pages/List.Ecommerce/index.js";
// import { FormOrder } from "./pages/List.Ecommerce/OrderPage.js";
// import { OrderReady } from "./pages/List.Ecommerce/OrderReady.js";


import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tealist" element={<TeaList />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/TeaPage/:id" element={<TeaCard />} />
          <Route path="/Teas" element={<Teas />} />
          <Route path="/FormOrder" element={<FormOrder />} />
          <Route path="/OrderReady" element={<OrderReady />} /> */}
        </Routes>
      </AuthContextComponent>

    </>
  );
}

export default App;
