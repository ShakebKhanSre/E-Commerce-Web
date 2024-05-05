import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory";
import Login from "./Pages/Login/Login.jsx";
import SignUpScreen from "./Pages/SignUpScreen";
import DetailPage from "./Pages/DetailPage";
function App({ props }) {
  const mensBannerImage =
    "https://img.freepik.com/premium-psd/simple-horizontal-web-banner-template-new-arrival-promotion_177160-84.jpg";
  const womenBannerImage =
    "https://img.freepik.com/free-vector/new-season-banner-template-with-pink-lines_1361-1528.jpg";
  const kidsBannerImage =
    "https://img.freepik.com/free-vector/flat-design-minimal-boutique-template-design_23-2149319754.jpg";

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/electronics"
            element={
              <ShopCategory
                category="electronics"
                bannerImageUrl={mensBannerImage}
                color={"#808080"}
              />
            }
          />
          <Route
            path="/jewelery"
            element={
              <ShopCategory
                category="jewelery"
                bannerImageUrl={womenBannerImage}
                color={"pink"}
              />
            }
          />
          <Route
            path="/men's clothing"
            element={
              <ShopCategory
                category="men's clothing"
                bannerImageUrl={kidsBannerImage}
                color={"#f0e68c"}
              />
            }
          />
          <Route
            path="/women's clothing"
            element={
              <ShopCategory
                category="women's clothing"
                bannerImageUrl={kidsBannerImage}
                color={"#f0e68c"}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
