import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./pages/HomePage";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cartpage from "./pages/Cartpage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import OrderDetail from "./pages/OrderDetail";
import MyOrder from "./pages/MyOrders";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetail from "./pages/ProductDetail";
import FAQ from "./CustomerSupport/FAQ";
import CommonBusinessAlternatives from "./CustomerSupport/CommonBusinessAlternatives";
import ModernSpecializedAlternatives from "./CustomerSupport/ModernSpecializedAlternatives.jsx";
import InternalTeamNames from "./CustomerSupport/InternalTeamNames";

const App = () => {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/order-success/:id" element={<OrderSuccess />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/CommonBusinessAlternatives"
          element={<CommonBusinessAlternatives />}
        />
        <Route
          path="/ModernSpecializedAlternatives"
          element={<ModernSpecializedAlternatives />}
        />
        <Route path="/InternalTeamNames" element={<InternalTeamNames />} />
      </Routes>
      <SpeedInsights />
    </>
  );
};

export default App;
