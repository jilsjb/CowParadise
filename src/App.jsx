import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Home from "./pages/Home";
import GamesPage from "./pages/Games";
import StoriesPage from "./pages/Stories";
import MooFamilyPage from "./pages/MooFamily";
import AboutUsPage from "./pages/AboutUs";
import MarketPage from "./pages/Market";
import NewsPage from "./pages/News";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/moo-family" element={<MooFamilyPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
