import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
// import {Card} from "./pages/TeaDetail/card"
import { TeaCard } from "./pages/ecommerce/teaPage.js";
import { Teas } from "./pages/ecommerce/index.js";
import { Reviews } from "./pages/ecommerce/reviews.js";
//import { Teas} from "./pages/ecommerce/cart.js";
import { Payment } from "./pages/ecommerce/payment.js";
import { OrderHistory } from "./pages/ecommerce/orderHistory.js";
import { OurTeam } from "./pages/OurTeam/index.js";
import { TeaRoomForm } from "./pages/TeaRoomForm";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { TeaRoomPost } from "./pages/TeaRoomPost";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TeaDetails } from "./pages/TeaDetails/index";
import { TeaRoomProfile } from "./pages/TeaRoomProfile";
import { EditTeaRoomProfile } from "./pages/EditProfile/TeaRoomProfile";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { TeaRoomHomePage } from "./pages/TeaRoomHomePage";


function App() {

  return (

    <AuthContextComponent>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/tealist" element={<Card />} /> */}
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/teaDetail/:id" element={<TeaDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/TeaPage/:id" element={<TeaCard />} />
        <Route path="/Teas" element={<Teas />} />
        <Route path="/TeaPage/:id/review" element={<Reviews />} />
        <Route path="/ecommerce" element={<Teas />} />
        {/* <Route path="/ecommerce/cart" element={<Cart />} /> */}
        <Route path="/ecommerce/payment" element={<Payment />} />
        <Route path="/ecommerce/payment/user:id" element={<OrderHistory />} />
        <Route path="/tea-room/profile" element={<TeaRoomProfile />} />
        <Route path="/tea-room/profile/edit" element={<EditTeaRoomProfile />} />
        <Route path="/tea-room/new-post" element={<TeaRoomForm />} />
        <Route path="/tea-room/post/:id" element={<TeaRoomPost />} />
        <Route path="/tea-room" element={<TeaRoomHomePage />} />
      </Routes>{" "}
      <Footer />
    </AuthContextComponent>

  );
}

export default App;
