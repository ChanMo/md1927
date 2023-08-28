import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import CasePage from "../pages/case";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/case" element={<CasePage />} />
    </Route>
  )
);

export default router