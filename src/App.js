import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import TeaPage from "./pages/TeaPage";
import { Card } from "./pages/ecommerce/card.js";
import { Teas } from "./pages/ecommerce/index.js";
import { Reviews } from "./pages/ecommerce/reviews.js";
import { CartPage } from "./pages/ecommerce/CartPage.js";
import { TeaDisplay } from "./pages/ecommerce/TeaDisplay.js";
import { Payment } from "./pages/ecommerce/payment.js";
import { OrderHistory } from "./pages/ecommerce/orderHistory.js";
import { OurTeam } from "./pages/OurTeam/index.js";
import { TeaRoomForm } from "./pages/TeaRoomForm";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { TeaRoomPost } from "./pages/TeaRoomPost";
import { CartComponent } from "./pages/ecommerce/cartContext";
import { AllTeas } from "./pages/ecommerce/pages/AllTeas.js";

function App() {
  return (
    <>
      <CartComponent>
        <AuthContextComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tealist" element={<TeaPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/card" element={<Card />} />
            <Route path="/Teas" element={<Teas />} />
            <Route path="/TeaPage/:id/review" element={<Reviews />} />
            <Route path="/ecommerce" element={<Teas />} />
            <Route path="/TeaDisplay/:id" element={<TeaDisplay />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/ecommerce/payment" element={<Payment />} />
            <Route path="/allTeas" element={<AllTeas />} />
            <Route
              path="/ecommerce/payment/user:id"
              element={<OrderHistory />}
            />
            <Route path="/tea-room/new-post" element={<TeaRoomForm />} />
            <Route path="/tea-room/post/:id" element={<TeaRoomPost />} />
          </Routes>{" "}
        </AuthContextComponent>
      </CartComponent>
    </>
  );
}

export default App;
