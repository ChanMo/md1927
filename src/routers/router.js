import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import CasePage from "../pages/case";
import ZhiGaoPage from "../pages/zhigao";
import ShuanggaoPage from "../pages/shuanggao";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/" element={<HomePage />} />
      <Route path="/zhigao" element={<ZhiGaoPage />} />
      <Route path="/shuanggao" element={<ShuanggaoPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/case" element={<CasePage />} />
    </Route>
  )
);

export default router