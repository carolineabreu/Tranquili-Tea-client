import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { Teas } from "./pages/ecommerce/index.js";
import { Payment } from "./pages/ecommerce/payment.js";
import { OurTeam } from "./pages/OurTeam/index.js";
import { TeaRoomForm } from "./pages/TeaRoomForm";
import { TeaRoomPost } from "./pages/TeaRoomPost";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TeaDetails } from "./pages/TeaDetails/index";
import { TeaRoomProfile } from "./pages/TeaRoomProfile";
import { EditTeaRoomProfile } from "./pages/EditProfile/TeaRoomProfile";
import { TeaRoomHomePage } from "./pages/TeaRoomHomePage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { EditProfile } from "./pages/EditProfile/Profile";
import { ProductList } from "./pages/ecommerce/Carrinho/pages/productList.js";
import { CarrinhoPage } from "./pages/ecommerce/Carrinho/pages/CarrinhoPage.js";
import { CarrinhoComponent } from "./pages/ecommerce/Carrinho/carrinho.js";
import { OrderDone } from "./pages/ecommerce/orderDone";

function App() {
  return (
    <>
      <Navbar />
      <CarrinhoComponent>
        <AuthContextComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/teaDetail/:id" element={<TeaDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/Teas" element={<Teas />} />
            <Route path="/tea-room/profile" element={<TeaRoomProfile />} />
            <Route path="/tea-room/profile/edit" element={<EditTeaRoomProfile />} />
            <Route path="/tea-room/new-post" element={<TeaRoomForm />} />
            <Route path="/tea-room/post/:id" element={<TeaRoomPost />} />
            <Route path="/tea-room" element={<TeaRoomHomePage />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/carrinho" element={<CarrinhoPage />} />
            <Route path="/orderDone" element={<OrderDone />} />
          </Routes>{" "}
          <Footer />
        </AuthContextComponent>
      </CarrinhoComponent>
    </>
  );
}

export default App;
