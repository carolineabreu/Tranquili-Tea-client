import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ContactUs } from "./pages/ContactUs/index";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { Teas } from "./pages/ShoppingCart/index";
import { Payment } from "./pages/ShoppingCart/payment";
import { OurTeam } from "./pages/OurTeam/index.js";
import { TeaRoomForm } from "./pages/TeaRoom/TeaRoomForm";
import { TeaRoomPost } from "./pages/TeaRoom/TeaRoomPost";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TeaDetails } from "./pages/TeaDetails/index";
import { TeaRoomProfile } from "./pages/TeaRoom/TeaRoomProfile";
import { EditTeaRoomProfile } from "./pages/EditProfile/TeaRoomProfile";
import { TeaRoomHomePage } from "./pages/TeaRoom/TeaRoomHomePage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { EditProfile } from "./pages/EditProfile/Profile";
import { ProductList } from "./pages/ProductList/productList.js";
import { ShoppingPage } from "./pages/ShoppingCart/shoppingPage";
// import { ShoppingCart} from "./pages/ShoppingCart/shoppingPage";
import { OrderDone } from "./pages/ShoppingCart/orderDone";
import { SearchPage } from "./pages/SearchPage/search"
import { Wishlist } from "./pages/Wishlist/index";

import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <ShoppingPage>
        <AuthContextComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/wishlist" element={<Wishlist />} />


            <Route path="*" element={<ErrorPage />} />

            <Route path="/tea-detail/:id" element={<TeaDetails />} />
            <Route path="/teas" element={<Teas />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/shopping-cart" element={<ProtectedRoute component={ShoppingPage} />} />
            <Route path="/order-done" element={<OrderDone />} />

            <Route path="/tea-room" element={<ProtectedRoute component={TeaRoomHomePage} />} />
            <Route path="/tea-room/profile" element={<TeaRoomProfile />} />
            <Route path="/tea-room/profile/edit" element={<EditTeaRoomProfile />} />
            <Route path="/tea-room/new-post" element={<TeaRoomForm />} />
            <Route path="/tea-room/post/:id" element={<TeaRoomPost />} />
          </Routes>{" "}
          <Footer />
        </AuthContextComponent>
      </ShoppingPage>
    </>
  );
}

export default App;
